import { ApiRequest } from "../types";

export async function getUser(request: ApiRequest) {
  return request;
}

export async function searchUsers(request: ApiRequest) {
  console.log(request.query);
  return request;
}

export async function signUp(request: ApiRequest) {
  return request;
}

export async function signIn(request: ApiRequest) {
  return request;
}

export async function signOut(request: ApiRequest) {
  return request;
}

export async function updateUser(request: ApiRequest) {
  return request;
}

export async function deleteUser(request: ApiRequest) {
  return request;
}

