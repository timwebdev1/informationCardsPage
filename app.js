const teamName = document.getElementById("team");
const sportName = document.getElementById("sport");
const yearOfTeam = document.getElementById("year");
const managerName = document.getElementById("manager");
const dropDownList = document.getElementById("players");
const playerCards = document.getElementById("player-card");

const myFavoriteBaseballTeam = {
  team: "Cardinals",
  sport: "Baseball",
  year: 2025,
  isWorldSeriesChampion: false,
  player: [
    {
      name: "Erick Fedde",
      position: "Pitcher",
      number: "12",
      nickname: "null",
    },
        {
      name: "Sonny Gray",
      position: "Pitcher",
      number: "54",
      nickname: "null",
    },
        {
      name: "Matthew Liberatore",
      position: "Pitcher",
      number: "52",
      nickname: "null",
    },
        {
      name: "Miles Mikolas",
      position: "Pitcher",
      number: "39",
      nickname: "null",
    },
        {
      name: "Andre Pallante",
      position: "Pitcher",
      number: "53",
      nickname: "null",
    },
        {
      name: "Gordon Graceffo",
      position: "Pitcher",
      number: "44",
      nickname: "null",
    },
        {
      name: "John King",
      position: "Pitcher",
      number: "47",
      nickname: "null",
    },
        {
      name: "Kyle Leahy",
      position: "Pitcher",
      number: "62",
      nickname: "null",
    },
        {
      name: "Phil Maton",
      position: "Pitcher",
      number: "88",
      nickname: "null",
    },
        {
      name: "Steven Matz",
      position: "Pitcher",
      number: "32",
      nickname: "null",
    },
        {
      name: "Riley O/'brien",
      position: "Pitcher",
      number: "55",
      nickname: "null",
    },
        {
      name: "JoJo Romero",
      position: "Pitcher",
      number: "59",
      nickname: "null",
    },
        {
      name: "Ryan Helsley",
      position: "Pitcher",
      number: "56",
      nickname: "null",
    },
        {
      name: "Iván Herrara",
      position: "Catcher",
      number: "48",
      nickname: "null",
    },
            {
      name: "Pedro Pagés",
      position: "Catcher",
      number: "43",
      nickname: "null",
    },
            {
      name: "Yohel Pozo",
      position: "Catcher",
      number: "63",
      nickname: "null",
    },
            {
      name: "Nolan Arendo",
      position: "Third Basemen",
      number: "26",
      nickname: "null",
    },
            {
      name: "Alec Burleson",
      position: "First Basemen",
      number: "41",
      nickname: "null",
    },
            {
      name: "Willson Contreras",
      position: "First Basemen",
      number: "40",
      nickname: "null",
    },
            {
      name: "Brendan Donovan",
      position: "Second Basemen",
      number: "33",
      nickname: "null",
    },
            {
      name: "José Fermín",
      position: "Second Basemen",
      number: "15",
      nickname: "null",
    },
                {
      name: "Nolan Gorman",
      position: "Second Basemen",
      number: "16",
      nickname: "null",
    },
                {
      name: "Garrett Hampson",
      position: "Second Basemen",
      number: "13",
      nickname: "null",
    },
                {
      name: "Thomas Saggese",
      position: "Second Basemen",
      number: "25",
      nickname: "null",
    },
                {
      name: "Masyn Winn",
      position: "Shortstop",
      number: "0",
      nickname: "null",
    },
                {
      name: "Victor Scot",
      position: "Center Fielder",
      number: "11",
      nickname: "null",
    },
  ]
}