import SharedActionTypes from '../shared-actions/actionTypes'

export type LoadingAction = {
    type: typeof SharedActionTypes.LOADING,
    payload: boolean
}