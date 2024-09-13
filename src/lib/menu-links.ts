const menuLinks: { id: number, label: string, path: string }[] = [
    {
        id: 1,
        label: "Accueil",
        path: "/"
    },
    {
        id: 2,
        label: "Se Connecter",
        path: "/connexion"
    },
    {
        id: 3,
        label: "Jouer",
        path: "/jouer"
    },
    {
        id: 4,
        label: "Classements",
        path: "/classements"
    }
]

const connectedMenuLinks: { id: number; label: string; path: string}[] = [
    {
        id: 1,
        label: "Mon compte",
        path: "/compte"
    },
    {
        id: 2,
        label: "Jouer",
        path: "/jouer"
    },
    {
        id: 3,
        label: "Classements",
        path: "/classements"
    }
]

export { menuLinks, connectedMenuLinks };