import { language } from "../types/language";

export const nor: language = {
  teams: {
    create_new_team: "Nytt lag",
    label_name: "Navn",
    label_slug: "Forkortelse",
    label_logo: "Logo",
    label_remove_logo: "Fjern bildet",
    rules_title: "Regler",
    rules_description:
      "Pass på at lagnavnet er kult og respektfullt, og vær sikker på at bildet ikke er noe tull! 😉",
    my_teams: "Mine lag",
    all_teams: "Alle lag",
    invite_only: "Invitasjon kreves for å bli med?",
  },
  notifications: {
    empty: "Du har ingen varsler",
    invitation: "Du har blitt invitert!",
  },
  table: {
    player_main_team: "Team",
    player_name: "Navn",
    player_rank: "Plass",
    player_tournament_wins: "Turneringer vunnet",
    player_tournaments_participated: "Turneringer deltatt",
  },
  generic: {
    back: "Tilbake",
    next: "Neste",
    not_found: "Fant ingeting",
    go_back: "Gå tilbake",
    go_home: "Gå hjem",
    accept: "Godkjenn",
    cancel: "Avbryt",
    decline: "Avvis",
    create: "Lagre",
  },
  home: {
    relevant_tournaments: "Aktuelt for deg",
    playing_right_now: "Kamper som spilles nå",
  },
  user: {
    sign_in: "Logg inn med steam",
    sign_out: "Logg ut",
  },
  sidebar: {
    matches: "Kamper",
    home: "Hjem",
    players: "Spillere",
    tournaments: "Turneringer",
    teams: "Lag",
    my_teams: "Mine lag",
    my_tournaments: "Dine pågående turneringer",
    my_recent_matches: "Dine tidligere kamper",
    admin: {
      admin: "Admin",
      create_tournament: "Lag ny turnering",
    },
  },
} as const;
