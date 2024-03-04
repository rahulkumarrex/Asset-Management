import { createReducer, on } from '@ngrx/store';
import { AssetAudit } from 'src/app/models/assetaudit';
import { AssetAuditActions } from '../Actions/asset-audit.actions';




export interface AssetAuditState {
  audits: AssetAudit[];
  loading: boolean;
  error: any;
}

export const initialState: AssetAuditState = {
  audits: [],
  loading: false,
  error: null
};

export const assetAuditReducer = createReducer(
  initialState,
  on(AssetAuditActions.loadAssetAudits, state => ({ ...state, loading: true })),
  on(AssetAuditActions.loadAssetAuditsSuccess, (state, { audits }) => ({ ...state, audits, loading: false })),
  on(AssetAuditActions.loadAssetAuditsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
