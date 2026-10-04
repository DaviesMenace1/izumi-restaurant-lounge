/** Real Yamasen venue photography (Cloudinary) */
export const venue = {
  nightExterior:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134932/Screenshot_2026-10-04-20-21-08-239_com.google.android.apps.maps-edit_sntlme.jpg",
  nightExteriorAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135001/Screenshot_2026-10-04-20-21-08-239_com.google.android.apps.maps-edit_rjnxot.jpg",
  hallDay:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135008/Screenshot_2026-10-04-20-18-40-279_com.google.android.apps.maps-edit_pqncdv.jpg",
  hallDayAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134931/Screenshot_2026-10-04-20-18-40-279_com.google.android.apps.maps-edit_aa5srx.jpg",
  seating:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134980/Screenshot_2026-10-04-20-19-57-977_com.google.android.apps.maps-edit_ekdl68.jpg",
  seatingAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135003/Screenshot_2026-10-04-20-19-07-379_com.google.android.apps.maps-edit_kvvfwm.jpg",
  upperDeck:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134994/Screenshot_2026-10-04-20-20-28-585_com.google.android.apps.maps-edit_o02uth.jpg",
  garden:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134994/Screenshot_2026-10-04-20-22-55-217_com.google.android.apps.maps-edit_qr0hjp.jpg",
  gardenAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134926/Screenshot_2026-10-04-20-22-55-217_com.google.android.apps.maps-edit_q46x2j.jpg",
  tables:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134980/Screenshot_2026-10-04-20-23-24-051_com.google.android.apps.maps-edit_qlvyad.jpg",
  outdoor:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134971/Screenshot_2026-10-04-20-24-34-866_com.google.android.apps.maps-edit_ksljr0.jpg",
  outdoorAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135013/Screenshot_2026-10-04-20-24-34-866_com.google.android.apps.maps-edit_supvvl.jpg",
  detail:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134975/Screenshot_2026-10-04-20-25-30-057_com.google.android.apps.maps-edit_tvppfu.jpg",
  detailAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135017/Screenshot_2026-10-04-20-25-30-057_com.google.android.apps.maps-edit_kiiga7.jpg",
  ambiance:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135018/Screenshot_2026-10-04-20-25-08-615_com.google.android.apps.maps-edit_awmkpr.jpg",
  ambianceAlt:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791134953/Screenshot_2026-10-04-20-25-08-615_com.google.android.apps.maps-edit_jpb24k.jpg",
  closing:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135018/Screenshot_2026-10-04-20-25-52-784_com.google.android.apps.maps-edit_w9aq4c.jpg",
} as const;

export const partners = {
  uberEats:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135017/ea07c05bc76796c58c54856832b6c6300a19231e_lr6p2q.jpg",
  booking:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791135014/81880bd8b04586a3cfd870d31d7bf8acc646be96_lkxw9l.jpg",
  shop:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791129378/9c56666a944af5d10e2d3754e8676011c8c4ad38_i1xwbo.jpg",
  tripadvisor:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791129128/Pearl-Afric-PARTNERS6_vq2k4a.jpg",
  uwa:
    "https://res.cloudinary.com/r8epy5mg/image/upload/v1791129129/uwa-logo_snl4mz.png",
} as const;

/** Ordered gallery for mosaic / experience pages */
export const gallery = [
  venue.nightExterior,
  venue.hallDay,
  venue.seating,
  venue.upperDeck,
  venue.garden,
  venue.tables,
  venue.outdoor,
  venue.detail,
  venue.ambiance,
  venue.closing,
] as const;
