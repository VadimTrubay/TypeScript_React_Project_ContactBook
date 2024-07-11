import {configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {contactsReducer} from "./contacts/slice";
import {filtersReducer} from "./filters/slice";
import {authReducer} from "./auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

type AuthPersistedState = ReturnType<typeof authReducer>;// Define type for authPersistConfig

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthPersistedState>(authPersistConfig, authReducer), // Use the defined type
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export type RouteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
