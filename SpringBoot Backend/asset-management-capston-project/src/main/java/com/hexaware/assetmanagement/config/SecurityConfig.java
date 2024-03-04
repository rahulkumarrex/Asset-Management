package com.hexaware.assetmanagement.config;


import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.hexaware.assetmanagement.filter.JwtAuthFilter;




@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig{

	@Autowired
	JwtAuthFilter authFilter;
	
    @Bean
    //authentication
    public UserDetailsService userDetailsService() {
		/*
		 * UserDetails admin = User.withUsername("Basant")
		 * .password(encoder.encode("Pwd1")) .roles("ADMIN") .build(); UserDetails user
		 * = User.withUsername("John") .password(encoder.encode("Pwd2"))
		 * .roles("USER","ADMIN","HR") .build(); return new
		 * InMemoryUserDetailsManager(admin, user);
		 */
       return new EmployeeInfoUserDetailsService();
    }
    
    @Bean
    public  SecurityFilterChain   getSecurityFilterChain(HttpSecurity http) throws Exception {
    	
    		return http.cors().and().csrf().disable()
    			.authorizeHttpRequests()
    			.requestMatchers("employee/login/authenticate","employee/addNewEmployee").permitAll()
    			.and()
    			.authorizeHttpRequests().requestMatchers("/employee/**")
    			.authenticated().and() 
    			.authorizeHttpRequests().requestMatchers("/asset/**")
    			.authenticated().and()
    			.authorizeHttpRequests().requestMatchers("/assetServiceRequest/**")
    			.authenticated().and()
    			.authorizeHttpRequests().requestMatchers("/assetrequests/**")
    			.authenticated().and()
    			.authorizeHttpRequests().requestMatchers("/assetaudit/**")
    			.authenticated().and()
    			.sessionManagement()
    			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    			.and()
    			.authenticationProvider(authenticationProvider())
    			.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
    			.build();
    		    	
    }
    
    
    @Bean
	 public CorsFilter corsFilter() {
       CorsConfiguration config = new CorsConfiguration();
       config.setAllowCredentials(true);
       config.addAllowedOrigin("http://localhost:4200");
       config.addAllowedHeader("*");
       config.addAllowedMethod("*");
       
       UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
       source.registerCorsConfiguration("/**", config);
       
       return new CorsFilter(source);
   }
    
    	

    @Bean    
    public PasswordEncoder passwordEncoder() {          
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
    	return configuration.getAuthenticationManager();
    }
    
	
	
}
