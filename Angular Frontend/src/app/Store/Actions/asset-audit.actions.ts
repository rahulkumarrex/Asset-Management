import { createAction, props } from '@ngrx/store';
import { AssetAudit } from 'src/app/models/assetaudit';



export const loadAssetAudits = createAction('[Asset Audit] Load Asset Audits');
export const loadAssetAuditsSuccess = createAction('[Asset Audit] Load Asset Audits Success', props<{ audits: AssetAudit[] }>());
export const loadAssetAuditsFailure = createAction('[Asset Audit] Load Asset Audits Failure', props<{ error: any }>());

export const AssetAuditActions = {
    loadAssetAudits,
    loadAssetAuditsSuccess,
    loadAssetAuditsFailure
  };
