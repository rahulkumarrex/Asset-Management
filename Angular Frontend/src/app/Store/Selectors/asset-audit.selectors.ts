import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AssetAuditState } from '../Reducer/asset-audit.reducer';


// Selector to get the entire state slice
export const selectAssetAuditState = createFeatureSelector<AssetAuditState>('assetAudit');

// Selector to get the audits array
export const selectAudits = createSelector(
  selectAssetAuditState,
  (state: AssetAuditState) => state.audits
);

// Selector to get the loading status
export const selectLoading = createSelector(
  selectAssetAuditState,
  (state: AssetAuditState) => state.loading
);

// Selector to get the error
export const selectError = createSelector(
  selectAssetAuditState,
  (state: AssetAuditState) => state.error
);
