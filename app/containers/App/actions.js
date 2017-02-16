/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
} from './constants';
/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export function changeForm(newFormState) {
  return {
    type: CHANGE_FORM,
    newFormState,
  };
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newAuthState) {
  return {
    type: SET_AUTH,
    newAuthState,
  };
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest(sending) {
  return {
    type: SENDING_REQUEST,
    sending,
  };
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

/**
 * Tells the app we want to log out a user
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}

/*
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}
