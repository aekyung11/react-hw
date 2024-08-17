// https://blog.logrocket.com/using-pocketbase-build-full-stack-app/
import PocketBase from "pocketbase";
const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

export async function currentUser() {
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh({ requestKey: null });

      return pb.authStore.model;
    } catch (error) {
      if ((error as any)?.response?.code === 401) {
        logout();
      } else {
        throw error;
      }
    }
  }
  return null;
}
export async function initiateSignUp() {
  await pb.collection("users").authWithOAuth2({ provider: "github" });
}
export function logout() {
  pb.authStore.clear();
}
export function getPb() {
  return pb;
}
