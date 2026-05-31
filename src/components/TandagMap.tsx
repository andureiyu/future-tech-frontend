"use client";

import { useEffect, useRef } from "react";

// Future Technologies office location — Rosario, Tandag City
const TANDAG_LAT = 9.0767;
const TANDAG_LNG = 126.1526;
const ZOOM = 14;

// SVG pin — tip is exactly at the bottom-center (14, 36), no CSS rotation needed
const PIN_SVG = `
  <svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22s14-12.667 14-22C28 6.268 21.732 0 14 0z"
      fill="#16a34a" stroke="white" stroke-width="2.5"/>
    <circle cx="14" cy="14" r="5" fill="white"/>
  </svg>
`;

export default function TandagMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [TANDAG_LAT, TANDAG_LNG],
        zoom: ZOOM,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapRef.current = map;

      // Carto Positron — minimal white/blue, no API key needed
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      // SVG pin: tip at exactly (14, 36) — no rotation drift
      const icon = L.divIcon({
        className: "",
        html: PIN_SVG,
        iconSize: [28, 36],
        iconAnchor: [14, 36],   // tip = bottom-center
        popupAnchor: [0, -38],
      });

      const marker = L.marker([TANDAG_LAT, TANDAG_LNG], { icon }).addTo(map);

      marker
        .bindPopup(
          `<div style="font-family:sans-serif;font-size:12px;font-weight:600;color:#1a1a1a;line-height:1.5;padding:1px 2px;">
            Future Technologies
            <br/><span style="font-weight:400;color:#555;font-size:11px;">Tandag City, Surigao del Sur</span>
          </div>`,
          { offset: [0, -4], closeButton: false }
        )
        .openPopup();

      // Recalculate size after the container finishes layout
      // (fixes off-center rendering when map initialises before CSS paint)
      setTimeout(() => map.invalidateSize(), 150);
    });

    return () => {
      if (mapRef.current) {
        // @ts-expect-error – Leaflet map instance
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Leaflet CSS */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div
        ref={containerRef}
        className="w-full h-full min-h-85 rounded-lg"
        style={{ zIndex: 0 }}
      />
    </>
  );
}
