import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AssetAuditActions } from '../Actions/asset-audit.actions';
import { AssetauditService } from 'src/app/services/assetaudit/assetaudit.service';


@Injectable()
export class AssetAuditEffects {

  loadAssetAudits$ = createEffect(() => this.actions$.pipe(
    ofType(AssetAuditActions.loadAssetAudits),
    mergeMap(() => this.assetAuditService.getAll()
      .pipe(
        map(audits => AssetAuditActions.loadAssetAuditsSuccess({ audits })),
        catchError(error => of(AssetAuditActions.loadAssetAuditsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private assetAuditService: AssetauditService
  ) {}
}
