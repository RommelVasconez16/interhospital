"use client";

import { useEffect } from "react";

const APP_VERSION = "2026-01-06";

export default function ClientCacheGuard() {
  useEffect(() => {
    const storedVersion = localStorage.getItem("app_version");

    if (storedVersion !== APP_VERSION) {
      console.log("🧹 Limpiando cache local por cambio de versión");

      localStorage.clear();
      sessionStorage.clear();

      // Forzar recarga limpia
      localStorage.setItem("app_version", APP_VERSION);
      window.location.reload();
    }
  }, []);

  return null;
}
