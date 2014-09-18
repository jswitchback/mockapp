// https://developer.yahoo.com/yql/console/?_uiFocus=fantasysports&q=select%20*%20from%20fantasysports.games%20where%20game_key%3D%22238%22#h=select+*+from+fantasysports.leagues.scoreboard+where+league_key%3D'238.l.178574'
var dataLeagueScoreboard = { 
 "query": {
  "count": 1,
  "created": "2014-08-29T03:27:36Z",
  "lang": "en-US",
  "diagnostics": {
   "publiclyCallable": "true",
   "url": {
    "execution-start-time": "0",
    "execution-stop-time": "333",
    "execution-time": "333",
    "content": "http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=238.l.178574/scoreboard"
   },
   "user-time": "336",
   "service-time": "333",
   "build-version": "0.2.2666"
  },
  "results": {
   "league": {
    "league_key": "238.l.178574",
    "league_id": "178574",
    "name": "Yahoo Public 178574",
    "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574",
    "draft_status": "postdraft",
    "num_teams": "12",
    "edit_key": "2014-08-29",
    "weekly_deadline": null,
    "league_update_timestamp": "1286184257",
    "scoring_type": "head",
    "league_type": "public",
    "renew": null,
    "renewed": null,
    "short_invitation_url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/invitation",
    "is_pro_league": "0",
    "current_week": "25",
    "start_week": "1",
    "start_date": "2010-04-04",
    "end_week": "25",
    "end_date": "2010-10-03",
    "is_finished": "1",
    "scoreboard": {
     "week": "25",
     "matchups": {
      "count": "4",
      "matchup": [
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "0",
        "is_tied": "0",
        "winner_team_key": "238.l.178574.t.3",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178574.t.1",
           "team_id": "1",
           "name": "Rock†own™",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/1",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "1",
           "number_of_moves": "0",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "2",
             "nickname": "A Yahoo User",
             "guid": "--"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "97"
              },
              {
               "stat_id": "7",
               "value": "33"
              },
              {
               "stat_id": "12",
               "value": "7"
              },
              {
               "stat_id": "13",
               "value": "46"
              },
              {
               "stat_id": "16",
               "value": "10"
              },
              {
               "stat_id": "3",
               "value": ".267"
              },
              {
               "stat_id": "50",
               "value": "49.2"
              },
              {
               "stat_id": "28",
               "value": "3"
              },
              {
               "stat_id": "32",
               "value": "10"
              },
              {
               "stat_id": "42",
               "value": "45"
              },
              {
               "stat_id": "26",
               "value": "3.99"
              },
              {
               "stat_id": "27",
               "value": "1.39"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "2"
           }
          },
          {
           "team_key": "238.l.178574.t.3",
           "team_id": "3",
           "name": "Who Dat Longballers",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/3",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "8",
           "number_of_moves": "29",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "4"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "5",
             "nickname": "A Yahoo User",
             "guid": "CFU67KGVWBMH36LJVPJHRIL7EU"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "111"
              },
              {
               "stat_id": "7",
               "value": "51"
              },
              {
               "stat_id": "12",
               "value": "25"
              },
              {
               "stat_id": "13",
               "value": "63"
              },
              {
               "stat_id": "16",
               "value": "8"
              },
              {
               "stat_id": "3",
               "value": ".285"
              },
              {
               "stat_id": "50",
               "value": "124.1"
              },
              {
               "stat_id": "28",
               "value": "9"
              },
              {
               "stat_id": "32",
               "value": "6"
              },
              {
               "stat_id": "42",
               "value": "103"
              },
              {
               "stat_id": "26",
               "value": "3.26"
              },
              {
               "stat_id": "27",
               "value": "1.13"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "8"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "0",
        "is_tied": "0",
        "winner_team_key": "238.l.178574.t.4",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178574.t.2",
           "team_id": "2",
           "name": "Scratch 'n Spit",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/2",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_2_lg.gif"
            }
           },
           "waiver_priority": "2",
           "number_of_moves": "41",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "6"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "12",
             "nickname": "A Yahoo User",
             "guid": "--"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "93"
              },
              {
               "stat_id": "7",
               "value": "52"
              },
              {
               "stat_id": "12",
               "value": "13"
              },
              {
               "stat_id": "13",
               "value": "38"
              },
              {
               "stat_id": "16",
               "value": "13"
              },
              {
               "stat_id": "3",
               "value": ".212"
              },
              {
               "stat_id": "50",
               "value": "175.2"
              },
              {
               "stat_id": "28",
               "value": "7"
              },
              {
               "stat_id": "32",
               "value": "6"
              },
              {
               "stat_id": "42",
               "value": "144"
              },
              {
               "stat_id": "26",
               "value": "4.20"
              },
              {
               "stat_id": "27",
               "value": "1.38"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "3"
           }
          },
          {
           "team_key": "238.l.178574.t.4",
           "team_id": "4",
           "name": "Oklahoma Outlaws",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/4",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "7",
           "number_of_moves": "32",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "3"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "10",
             "nickname": "A Yahoo User",
             "guid": "HWUDPXSKLNEHQHCRPH2TQR3SJU"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "112"
              },
              {
               "stat_id": "7",
               "value": "59"
              },
              {
               "stat_id": "12",
               "value": "7"
              },
              {
               "stat_id": "13",
               "value": "49"
              },
              {
               "stat_id": "16",
               "value": "8"
              },
              {
               "stat_id": "3",
               "value": ".256"
              },
              {
               "stat_id": "50",
               "value": "133.2"
              },
              {
               "stat_id": "28",
               "value": "12"
              },
              {
               "stat_id": "32",
               "value": "7"
              },
              {
               "stat_id": "42",
               "value": "125"
              },
              {
               "stat_id": "26",
               "value": "2.22"
              },
              {
               "stat_id": "27",
               "value": "1.11"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "7"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "1",
        "is_tied": "0",
        "winner_team_key": "238.l.178574.t.11",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178574.t.5",
           "team_id": "5",
           "name": "Bronx Bombers",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/5",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_11_lg.gif"
            }
           },
           "waiver_priority": "9",
           "number_of_moves": "19",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "3",
             "nickname": "A Yahoo User",
             "guid": "MKIUORIEYLB4KXLS5MZ5XWWXHI"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "121"
              },
              {
               "stat_id": "7",
               "value": "53"
              },
              {
               "stat_id": "12",
               "value": "11"
              },
              {
               "stat_id": "13",
               "value": "52"
              },
              {
               "stat_id": "16",
               "value": "9"
              },
              {
               "stat_id": "3",
               "value": ".279"
              },
              {
               "stat_id": "50",
               "value": "80.0"
              },
              {
               "stat_id": "28",
               "value": "5"
              },
              {
               "stat_id": "32",
               "value": "0"
              },
              {
               "stat_id": "42",
               "value": "70"
              },
              {
               "stat_id": "26",
               "value": "2.70"
              },
              {
               "stat_id": "27",
               "value": "1.26"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "4"
           }
          },
          {
           "team_key": "238.l.178574.t.11",
           "team_id": "11",
           "name": "A-Z",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/11",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_4_lg.gif"
            }
           },
           "waiver_priority": "3",
           "number_of_moves": "0",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "11",
             "nickname": "A Yahoo User",
             "guid": "5RDLFFN4SKQFNLW5DEJ24REFNU"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "106"
              },
              {
               "stat_id": "7",
               "value": "50"
              },
              {
               "stat_id": "12",
               "value": "13"
              },
              {
               "stat_id": "13",
               "value": "56"
              },
              {
               "stat_id": "16",
               "value": "5"
              },
              {
               "stat_id": "3",
               "value": ".280"
              },
              {
               "stat_id": "50",
               "value": "99.0"
              },
              {
               "stat_id": "28",
               "value": "5"
              },
              {
               "stat_id": "32",
               "value": "12"
              },
              {
               "stat_id": "42",
               "value": "76"
              },
              {
               "stat_id": "26",
               "value": "4.82"
              },
              {
               "stat_id": "27",
               "value": "1.53"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "5"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "1",
        "is_tied": "0",
        "winner_team_key": "238.l.178574.t.12",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178574.t.8",
           "team_id": "8",
           "name": "Maxx Payne",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/8",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_12_lg.gif"
            }
           },
           "waiver_priority": "6",
           "number_of_moves": "20",
           "number_of_trades": "1",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "7",
             "nickname": "A Yahoo User",
             "guid": "PPP7VXOWRIEO2JCBPTXLII4ROY"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "109"
              },
              {
               "stat_id": "7",
               "value": "50"
              },
              {
               "stat_id": "12",
               "value": "6"
              },
              {
               "stat_id": "13",
               "value": "45"
              },
              {
               "stat_id": "16",
               "value": "14"
              },
              {
               "stat_id": "3",
               "value": ".251"
              },
              {
               "stat_id": "50",
               "value": "81.1"
              },
              {
               "stat_id": "28",
               "value": "5"
              },
              {
               "stat_id": "32",
               "value": "0"
              },
              {
               "stat_id": "42",
               "value": "79"
              },
              {
               "stat_id": "26",
               "value": "3.43"
              },
              {
               "stat_id": "27",
               "value": "1.28"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "3"
           }
          },
          {
           "team_key": "238.l.178574.t.12",
           "team_id": "12",
           "name": "pirate plunders'2",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178574/12",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_12_lg.gif"
            }
           },
           "waiver_priority": "5",
           "number_of_moves": "2",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "8",
             "nickname": "A Yahoo User",
             "guid": "2I3BV6PLGV3AXJYN7GZGOG5JJQ"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "67"
              },
              {
               "stat_id": "7",
               "value": "33"
              },
              {
               "stat_id": "12",
               "value": "6"
              },
              {
               "stat_id": "13",
               "value": "22"
              },
              {
               "stat_id": "16",
               "value": "3"
              },
              {
               "stat_id": "3",
               "value": ".277"
              },
              {
               "stat_id": "50",
               "value": "80.1"
              },
              {
               "stat_id": "28",
               "value": "5"
              },
              {
               "stat_id": "32",
               "value": "6"
              },
              {
               "stat_id": "42",
               "value": "87"
              },
              {
               "stat_id": "26",
               "value": "3.36"
              },
              {
               "stat_id": "27",
               "value": "1.18"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "5"
           }
          }
         ]
        }
       }
      ]
     }
    }
   }
  }
 }
};

// https://developer.yahoo.com/yql/console/?_uiFocus=fantasysports&q=select%20*%20from%20fantasysports.games%20where%20game_key%3D%22238%22#h=select+*+from+fantasysports.leagues.scoreboard+where+league_key%3D'238.l.178510'
var dataLeagueScoreboard2 = {
 "query": {
  "count": 1,
  "created": "2014-09-02T03:17:50Z",
  "lang": "en-US",
  "diagnostics": {
   "publiclyCallable": "true",
   "url": {
    "execution-start-time": "1",
    "execution-stop-time": "390",
    "execution-time": "389",
    "content": "http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=238.l.178510/scoreboard"
   },
   "user-time": "392",
   "service-time": "389",
   "build-version": "0.2.2666"
  },
  "results": {
   "league": {
    "league_key": "238.l.178510",
    "league_id": "178510",
    "name": "Yahoo Public 178510",
    "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510",
    "draft_status": "postdraft",
    "num_teams": "12",
    "edit_key": "2014-09-02",
    "weekly_deadline": null,
    "league_update_timestamp": "1286184242",
    "scoring_type": "head",
    "league_type": "public",
    "renew": null,
    "renewed": null,
    "short_invitation_url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/invitation",
    "is_pro_league": "0",
    "current_week": "25",
    "start_week": "1",
    "start_date": "2010-04-04",
    "end_week": "25",
    "end_date": "2010-10-03",
    "is_finished": "1",
    "scoreboard": {
     "week": "25",
     "matchups": {
      "count": "4",
      "matchup": [
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "1",
        "is_tied": "0",
        "winner_team_key": "238.l.178510.t.10",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178510.t.1",
           "team_id": "1",
           "name": "Dublin Destroyers",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/1",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_4_lg.gif"
            }
           },
           "waiver_priority": "2",
           "number_of_moves": "5",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "4",
             "nickname": "A Yahoo User",
             "guid": "Q3ZMZS4AWQQJMSGUXUUR3Q2BLE"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "100"
              },
              {
               "stat_id": "7",
               "value": "48"
              },
              {
               "stat_id": "12",
               "value": "10"
              },
              {
               "stat_id": "13",
               "value": "40"
              },
              {
               "stat_id": "16",
               "value": "5"
              },
              {
               "stat_id": "3",
               "value": ".243"
              },
              {
               "stat_id": "50",
               "value": "100.2"
              },
              {
               "stat_id": "28",
               "value": "7"
              },
              {
               "stat_id": "32",
               "value": "1"
              },
              {
               "stat_id": "42",
               "value": "106"
              },
              {
               "stat_id": "26",
               "value": "5.27"
              },
              {
               "stat_id": "27",
               "value": "1.45"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "3"
           }
          },
          {
           "team_key": "238.l.178510.t.10",
           "team_id": "10",
           "name": "cubsmycurse",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/10",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_7_lg.gif"
            }
           },
           "waiver_priority": "6",
           "number_of_moves": "0",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "2",
             "nickname": "A Yahoo User",
             "guid": "7XQFURRIIMKRQNZHXCEZ27BXVU"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "98"
              },
              {
               "stat_id": "7",
               "value": "46"
              },
              {
               "stat_id": "12",
               "value": "14"
              },
              {
               "stat_id": "13",
               "value": "53"
              },
              {
               "stat_id": "16",
               "value": "11"
              },
              {
               "stat_id": "3",
               "value": ".279"
              },
              {
               "stat_id": "50",
               "value": "57.0"
              },
              {
               "stat_id": "28",
               "value": "2"
              },
              {
               "stat_id": "32",
               "value": "1"
              },
              {
               "stat_id": "42",
               "value": "65"
              },
              {
               "stat_id": "26",
               "value": "3.79"
              },
              {
               "stat_id": "27",
               "value": "1.32"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "6"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "0",
        "is_tied": "1",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178510.t.2",
           "team_id": "2",
           "name": "Cincy2010",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/2",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_5_lg.gif"
            }
           },
           "waiver_priority": "9",
           "number_of_moves": "36",
           "number_of_trades": "1",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "7",
             "nickname": "A Yahoo User",
             "guid": "XGJ5IBGJ52YZCIWXMMHAITSH6E"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "92"
              },
              {
               "stat_id": "7",
               "value": "49"
              },
              {
               "stat_id": "12",
               "value": "19"
              },
              {
               "stat_id": "13",
               "value": "53"
              },
              {
               "stat_id": "16",
               "value": "8"
              },
              {
               "stat_id": "3",
               "value": ".251"
              },
              {
               "stat_id": "50",
               "value": "142.2"
              },
              {
               "stat_id": "28",
               "value": "9"
              },
              {
               "stat_id": "32",
               "value": "3"
              },
              {
               "stat_id": "42",
               "value": "133"
              },
              {
               "stat_id": "26",
               "value": "3.34"
              },
              {
               "stat_id": "27",
               "value": "1.20"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "5"
           }
          },
          {
           "team_key": "238.l.178510.t.3",
           "team_id": "3",
           "name": "st.lou.billikens",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/3",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_6_lg.gif"
            }
           },
           "waiver_priority": "10",
           "number_of_moves": "63",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "3"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "8",
             "nickname": "A Yahoo User",
             "guid": "3ETUOYB5CZTRBLHFJ76S6BWZ5U"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "88"
              },
              {
               "stat_id": "7",
               "value": "42"
              },
              {
               "stat_id": "12",
               "value": "7"
              },
              {
               "stat_id": "13",
               "value": "39"
              },
              {
               "stat_id": "16",
               "value": "6"
              },
              {
               "stat_id": "3",
               "value": ".257"
              },
              {
               "stat_id": "50",
               "value": "106.2"
              },
              {
               "stat_id": "28",
               "value": "11"
              },
              {
               "stat_id": "32",
               "value": "13"
              },
              {
               "stat_id": "42",
               "value": "107"
              },
              {
               "stat_id": "26",
               "value": "2.53"
              },
              {
               "stat_id": "27",
               "value": "1.14"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "5"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "0",
        "is_tied": "0",
        "winner_team_key": "238.l.178510.t.11",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178510.t.4",
           "team_id": "4",
           "name": "I USE HGH",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/4",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "12",
           "number_of_moves": "47",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "6"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "3",
             "nickname": "A Yahoo User",
             "guid": "XN2IYPH2NOV6RSM3LXGGQAXXZI"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "109"
              },
              {
               "stat_id": "7",
               "value": "66"
              },
              {
               "stat_id": "12",
               "value": "18"
              },
              {
               "stat_id": "13",
               "value": "51"
              },
              {
               "stat_id": "16",
               "value": "14"
              },
              {
               "stat_id": "3",
               "value": ".248"
              },
              {
               "stat_id": "50",
               "value": "124.1"
              },
              {
               "stat_id": "28",
               "value": "6"
              },
              {
               "stat_id": "32",
               "value": "12"
              },
              {
               "stat_id": "42",
               "value": "107"
              },
              {
               "stat_id": "26",
               "value": "3.98"
              },
              {
               "stat_id": "27",
               "value": "1.29"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "4"
           }
          },
          {
           "team_key": "238.l.178510.t.11",
           "team_id": "11",
           "name": "FlufferNutters McGee",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/11",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "8",
           "number_of_moves": "45",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "6"
           },
           "clinched_playoffs": "1",
           "managers": {
            "manager": {
             "manager_id": "10",
             "nickname": "A Yahoo User",
             "guid": "X7MWV56PJV5VN6MO2MZKXDX4MI"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "116"
              },
              {
               "stat_id": "7",
               "value": "56"
              },
              {
               "stat_id": "12",
               "value": "14"
              },
              {
               "stat_id": "13",
               "value": "63"
              },
              {
               "stat_id": "16",
               "value": "12"
              },
              {
               "stat_id": "3",
               "value": ".272"
              },
              {
               "stat_id": "50",
               "value": "132.0"
              },
              {
               "stat_id": "28",
               "value": "9"
              },
              {
               "stat_id": "32",
               "value": "9"
              },
              {
               "stat_id": "42",
               "value": "128"
              },
              {
               "stat_id": "26",
               "value": "2.39"
              },
              {
               "stat_id": "27",
               "value": "1.08"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "6"
           }
          }
         ]
        }
       },
       {
        "week": "25",
        "week_start": "2010-09-20",
        "week_end": "2010-10-03",
        "status": "postevent",
        "is_playoffs": "1",
        "is_consolation": "1",
        "is_tied": "0",
        "winner_team_key": "238.l.178510.t.9",
        "teams": {
         "count": "2",
         "team": [
          {
           "team_key": "238.l.178510.t.8",
           "team_id": "8",
           "name": "Ohio Jays",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/8",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
            }
           },
           "waiver_priority": "5",
           "number_of_moves": "0",
           "number_of_trades": "0",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "6",
             "nickname": "A Yahoo User",
             "guid": "4QJIPCFFKXO22H2BEFTT7DHPXA"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "77"
              },
              {
               "stat_id": "7",
               "value": "37"
              },
              {
               "stat_id": "12",
               "value": "15"
              },
              {
               "stat_id": "13",
               "value": "49"
              },
              {
               "stat_id": "16",
               "value": "7"
              },
              {
               "stat_id": "3",
               "value": ".235"
              },
              {
               "stat_id": "50",
               "value": "89.0"
              },
              {
               "stat_id": "28",
               "value": "5"
              },
              {
               "stat_id": "32",
               "value": "5"
              },
              {
               "stat_id": "42",
               "value": "71"
              },
              {
               "stat_id": "26",
               "value": "3.44"
              },
              {
               "stat_id": "27",
               "value": "1.27"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "2"
           }
          },
          {
           "team_key": "238.l.178510.t.9",
           "team_id": "9",
           "name": "fung fu panda",
           "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/178510/9",
           "team_logos": {
            "team_logo": {
             "size": "large",
             "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_12_lg.gif"
            }
           },
           "waiver_priority": "11",
           "number_of_moves": "25",
           "number_of_trades": "1",
           "roster_adds": {
            "coverage_type": "week",
            "coverage_value": "25",
            "value": "0"
           },
           "managers": {
            "manager": {
             "manager_id": "9",
             "nickname": "A Yahoo User",
             "guid": "XEKSNFUIKJHEHM4BZ2PIBYYHG4"
            }
           },
           "team_stats": {
            "coverage_type": "week",
            "week": "25",
            "stats": {
             "stat": [
              {
               "stat_id": "60",
               "value": "110"
              },
              {
               "stat_id": "7",
               "value": "54"
              },
              {
               "stat_id": "12",
               "value": "17"
              },
              {
               "stat_id": "13",
               "value": "46"
              },
              {
               "stat_id": "16",
               "value": "6"
              },
              {
               "stat_id": "3",
               "value": ".309"
              },
              {
               "stat_id": "50",
               "value": "133.0"
              },
              {
               "stat_id": "28",
               "value": "7"
              },
              {
               "stat_id": "32",
               "value": "9"
              },
              {
               "stat_id": "42",
               "value": "109"
              },
              {
               "stat_id": "26",
               "value": "2.91"
              },
              {
               "stat_id": "27",
               "value": "1.27"
              }
             ]
            }
           },
           "team_points": {
            "coverage_type": "week",
            "week": "25",
            "total": "7"
           }
          }
         ]
        }
       }
      ]
     }
    }
   }
  }
 }
}

// https://developer.yahoo.com/yql/console/?_uiFocus=fantasysports&q=select%20*%20from%20fantasysports.games%20where%20game_key%3D%22238%22#h=select+*+from+fantasysports.leagues.settings+where+league_key%3D'238.l.627060'

var dataLeagueSettings = {
 "query": {
  "count": 1,
  "created": "2014-08-29T03:30:37Z",
  "lang": "en-US",
  "diagnostics": {
   "publiclyCallable": "true",
   "url": {
    "execution-start-time": "1",
    "execution-stop-time": "153",
    "execution-time": "152",
    "content": "http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=238.l.627060/settings"
   },
   "user-time": "153",
   "service-time": "152",
   "build-version": "0.2.2666"
  },
  "results": {
   "league": {
    "league_key": "238.l.627060",
    "league_id": "627060",
    "name": "SubRelegationMinorLittleLeague",
    "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060",
    "draft_status": "postdraft",
    "num_teams": "9",
    "edit_key": "2014-08-28",
    "weekly_deadline": "intraday",
    "league_update_timestamp": "1286182269",
    "scoring_type": "roto",
    "league_type": "private",
    "renew": null,
    "renewed": null,
    "short_invitation_url": null,
    "is_pro_league": "0",
    "start_date": "2010-04-04",
    "end_date": "2010-10-03",
    "is_finished": "1",
    "settings": {
     "draft_type": "live",
     "is_auction_draft": "1",
     "scoring_type": "roto",
     "uses_playoff": "0",
     "waiver_type": "R",
     "waiver_rule": "all",
     "uses_faab": "0",
     "draft_time": "1270245600",
     "post_draft_players": "W",
     "max_teams": "14",
     "waiver_time": "2",
     "trade_end_date": "2010-08-15",
     "trade_ratify_type": "vote",
     "trade_reject_time": "2",
     "player_pool": "ALL",
     "cant_cut_list": "yahoo",
     "is_publicly_viewable": "1",
     "roster_positions": {
      "roster_position": [
       {
        "position": "C",
        "position_type": "B",
        "count": "1"
       },
       {
        "position": "1B",
        "position_type": "B",
        "count": "1"
       },
       {
        "position": "2B",
        "position_type": "B",
        "count": "1"
       },
       {
        "position": "3B",
        "position_type": "B",
        "count": "1"
       },
       {
        "position": "SS",
        "position_type": "B",
        "count": "1"
       },
       {
        "position": "OF",
        "position_type": "B",
        "count": "3"
       },
       {
        "position": "Util",
        "position_type": "B",
        "count": "2"
       },
       {
        "position": "SP",
        "position_type": "P",
        "count": "2"
       },
       {
        "position": "RP",
        "position_type": "P",
        "count": "2"
       },
       {
        "position": "P",
        "position_type": "P",
        "count": "4"
       },
       {
        "position": "BN",
        "count": "5"
       },
       {
        "position": "DL",
        "count": "1"
       }
      ]
     },
     "stat_categories": {
      "stats": {
       "stat": [
        {
         "stat_id": "60",
         "enabled": "1",
         "name": "H/AB",
         "display_name": "H/AB",
         "sort_order": "1",
         "position_type": "B",
         "is_only_display_stat": "1"
        },
        {
         "stat_id": "7",
         "enabled": "1",
         "name": "Runs",
         "display_name": "R",
         "sort_order": "1",
         "position_type": "B"
        },
        {
         "stat_id": "12",
         "enabled": "1",
         "name": "Home Runs",
         "display_name": "HR",
         "sort_order": "1",
         "position_type": "B"
        },
        {
         "stat_id": "13",
         "enabled": "1",
         "name": "Runs Batted In",
         "display_name": "RBI",
         "sort_order": "1",
         "position_type": "B"
        },
        {
         "stat_id": "16",
         "enabled": "1",
         "name": "Stolen Bases",
         "display_name": "SB",
         "sort_order": "1",
         "position_type": "B"
        },
        {
         "stat_id": "3",
         "enabled": "1",
         "name": "Batting Average",
         "display_name": "AVG",
         "sort_order": "1",
         "position_type": "B"
        },
        {
         "stat_id": "50",
         "enabled": "1",
         "name": "Innings Pitched",
         "display_name": "IP",
         "sort_order": "1",
         "position_type": "P",
         "is_only_display_stat": "1"
        },
        {
         "stat_id": "28",
         "enabled": "1",
         "name": "Wins",
         "display_name": "W",
         "sort_order": "1",
         "position_type": "P"
        },
        {
         "stat_id": "32",
         "enabled": "1",
         "name": "Saves",
         "display_name": "SV",
         "sort_order": "1",
         "position_type": "P"
        },
        {
         "stat_id": "42",
         "enabled": "1",
         "name": "Strikeouts",
         "display_name": "K",
         "sort_order": "1",
         "position_type": "P"
        },
        {
         "stat_id": "26",
         "enabled": "1",
         "name": "Earned Run Average",
         "display_name": "ERA",
         "sort_order": "0",
         "position_type": "P"
        },
        {
         "stat_id": "27",
         "enabled": "1",
         "name": "(Walks + Hits)/ Innings Pitched",
         "display_name": "WHIP",
         "sort_order": "0",
         "position_type": "P"
        }
       ]
      }
     },
     "season_type": "full",
     "max_games_played": "162",
     "max_innings_pitched": "1250"
    }
   }
  }
 }
};

// https://developer.yahoo.com/yql/console/?_uiFocus=fantasysports&q=select%20*%20from%20fantasysports.games%20where%20game_key%3D%22238%22#h=select+*+from+fantasysports.leagues.standings+where+league_key%3D'238.l.627060'
var dataLeagueStandings = {
 "query": {
  "count": 1,
  "created": "2014-08-29T13:42:41Z",
  "lang": "en-US",
  "diagnostics": {
   "publiclyCallable": "true",
   "url": {
    "execution-start-time": "0",
    "execution-stop-time": "220",
    "execution-time": "220",
    "content": "http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=238.l.627060/standings"
   },
   "user-time": "225",
   "service-time": "220",
   "build-version": "0.2.2666"
  },
  "results": {
   "league": {
    "league_key": "238.l.627060",
    "league_id": "627060",
    "name": "SubRelegationMinorLittleLeague",
    "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060",
    "draft_status": "postdraft",
    "num_teams": "9",
    "edit_key": "2014-08-29",
    "weekly_deadline": "intraday",
    "league_update_timestamp": "1286182269",
    "scoring_type": "roto",
    "league_type": "private",
    "renew": null,
    "renewed": null,
    "short_invitation_url": null,
    "is_pro_league": "0",
    "start_date": "2010-04-04",
    "end_date": "2010-10-03",
    "is_finished": "1",
    "standings": {
     "teams": {
      "count": "9",
      "team": [
       {
        "team_key": "238.l.627060.t.8",
        "team_id": "8",
        "name": "Autodraft baby!",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/8",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "9",
        "number_of_moves": "38",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "1"
        },
        "managers": {
         "manager": {
          "manager_id": "5",
          "nickname": "A Yahoo User",
          "guid": "VZVEVUCLSJAHSM73FMJ4BYFIKU"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "871"
           },
           {
            "stat_id": "12",
            "value": "212"
           },
           {
            "stat_id": "13",
            "value": "812"
           },
           {
            "stat_id": "16",
            "value": "131"
           },
           {
            "stat_id": "3",
            "value": ".279"
           },
           {
            "stat_id": "50",
            "value": "1249.1"
           },
           {
            "stat_id": "28",
            "value": "73"
           },
           {
            "stat_id": "32",
            "value": "132"
           },
           {
            "stat_id": "42",
            "value": "1182"
           },
           {
            "stat_id": "26",
            "value": "3.28"
           },
           {
            "stat_id": "27",
            "value": "1.22"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "69.5",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "7"
           },
           {
            "stat_id": "12",
            "value": "8"
           },
           {
            "stat_id": "13",
            "value": "7"
           },
           {
            "stat_id": "16",
            "value": "7"
           },
           {
            "stat_id": "3",
            "value": "4.5"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "2"
           },
           {
            "stat_id": "32",
            "value": "9"
           },
           {
            "stat_id": "42",
            "value": "9"
           },
           {
            "stat_id": "26",
            "value": "8"
           },
           {
            "stat_id": "27",
            "value": "8"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "1",
         "points_for": "69.5",
         "points_change": "0",
         "points_back": "0"
        }
       },
       {
        "team_key": "238.l.627060.t.12",
        "team_id": "12",
        "name": "Whip City Brew",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/12",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_7_lg.gif"
         }
        },
        "waiver_priority": "4",
        "number_of_moves": "50",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "15"
        },
        "managers": {
         "manager": {
          "manager_id": "9",
          "nickname": "A Yahoo User",
          "guid": "B5AYXC6ECW5K4JU2GWTDYIMFY4"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "896"
           },
           {
            "stat_id": "12",
            "value": "205"
           },
           {
            "stat_id": "13",
            "value": "787"
           },
           {
            "stat_id": "16",
            "value": "143"
           },
           {
            "stat_id": "3",
            "value": ".285"
           },
           {
            "stat_id": "50",
            "value": "1251.0"
           },
           {
            "stat_id": "28",
            "value": "77"
           },
           {
            "stat_id": "32",
            "value": "120"
           },
           {
            "stat_id": "42",
            "value": "1092"
           },
           {
            "stat_id": "26",
            "value": "3.51"
           },
           {
            "stat_id": "27",
            "value": "1.23"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "67.5",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "9"
           },
           {
            "stat_id": "12",
            "value": "5"
           },
           {
            "stat_id": "13",
            "value": "5"
           },
           {
            "stat_id": "16",
            "value": "8"
           },
           {
            "stat_id": "3",
            "value": "9"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "4.5"
           },
           {
            "stat_id": "32",
            "value": "8"
           },
           {
            "stat_id": "42",
            "value": "6"
           },
           {
            "stat_id": "26",
            "value": "7"
           },
           {
            "stat_id": "27",
            "value": "6"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "2",
         "points_for": "67.5",
         "points_change": "-0.5",
         "points_back": "2"
        }
       },
       {
        "team_key": "238.l.627060.t.6",
        "team_id": "6",
        "name": "PrognosisNegative!",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/6",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "8",
        "number_of_moves": "30",
        "number_of_trades": "1",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "2"
        },
        "managers": {
         "manager": {
          "manager_id": "1",
          "nickname": "A Yahoo User",
          "guid": "XZH7NMPQJHW277PJLFFX4WXLZY",
          "is_commissioner": "1"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "879"
           },
           {
            "stat_id": "12",
            "value": "211"
           },
           {
            "stat_id": "13",
            "value": "840"
           },
           {
            "stat_id": "16",
            "value": "146"
           },
           {
            "stat_id": "3",
            "value": ".279"
           },
           {
            "stat_id": "50",
            "value": "1262.0"
           },
           {
            "stat_id": "28",
            "value": "79"
           },
           {
            "stat_id": "32",
            "value": "119"
           },
           {
            "stat_id": "42",
            "value": "1109"
           },
           {
            "stat_id": "26",
            "value": "3.67"
           },
           {
            "stat_id": "27",
            "value": "1.27"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "65",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "8"
           },
           {
            "stat_id": "12",
            "value": "7"
           },
           {
            "stat_id": "13",
            "value": "8"
           },
           {
            "stat_id": "16",
            "value": "9"
           },
           {
            "stat_id": "3",
            "value": "4.5"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "6.5"
           },
           {
            "stat_id": "32",
            "value": "7"
           },
           {
            "stat_id": "42",
            "value": "7"
           },
           {
            "stat_id": "26",
            "value": "5"
           },
           {
            "stat_id": "27",
            "value": "3"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "3",
         "points_for": "65",
         "points_change": "-1.5",
         "points_back": "4.5"
        }
       },
       {
        "team_key": "238.l.627060.t.3",
        "team_id": "3",
        "name": "operation panda",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/3",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "5",
        "number_of_moves": "4",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "3",
          "nickname": "A Yahoo User",
          "guid": "7LDDQKPOU2WTKCSOW3SORG2AGI"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "835"
           },
           {
            "stat_id": "12",
            "value": "237"
           },
           {
            "stat_id": "13",
            "value": "844"
           },
           {
            "stat_id": "16",
            "value": "72"
           },
           {
            "stat_id": "3",
            "value": ".283"
           },
           {
            "stat_id": "50",
            "value": "1224.1"
           },
           {
            "stat_id": "28",
            "value": "77"
           },
           {
            "stat_id": "32",
            "value": "80"
           },
           {
            "stat_id": "42",
            "value": "1085"
           },
           {
            "stat_id": "26",
            "value": "3.59"
           },
           {
            "stat_id": "27",
            "value": "1.23"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "59",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "6"
           },
           {
            "stat_id": "12",
            "value": "9"
           },
           {
            "stat_id": "13",
            "value": "9"
           },
           {
            "stat_id": "16",
            "value": "1.5"
           },
           {
            "stat_id": "3",
            "value": "7"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "4.5"
           },
           {
            "stat_id": "32",
            "value": "5"
           },
           {
            "stat_id": "42",
            "value": "5"
           },
           {
            "stat_id": "26",
            "value": "6"
           },
           {
            "stat_id": "27",
            "value": "6"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "4",
         "points_for": "59",
         "points_change": "-0.5",
         "points_back": "10.5"
        }
       },
       {
        "team_key": "238.l.627060.t.14",
        "team_id": "14",
        "name": "HelloRoto",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/14",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "6",
        "number_of_moves": "0",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "4",
          "nickname": "A Yahoo User",
          "guid": "HWFLCXTC4P6JFEUYYR46JBXVRE"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "732"
           },
           {
            "stat_id": "12",
            "value": "196"
           },
           {
            "stat_id": "13",
            "value": "740"
           },
           {
            "stat_id": "16",
            "value": "124"
           },
           {
            "stat_id": "3",
            "value": ".283"
           },
           {
            "stat_id": "50",
            "value": "1259.1"
           },
           {
            "stat_id": "28",
            "value": "82"
           },
           {
            "stat_id": "32",
            "value": "88"
           },
           {
            "stat_id": "42",
            "value": "1048"
           },
           {
            "stat_id": "26",
            "value": "3.84"
           },
           {
            "stat_id": "27",
            "value": "1.34"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "46",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "3"
           },
           {
            "stat_id": "12",
            "value": "4"
           },
           {
            "stat_id": "13",
            "value": "4"
           },
           {
            "stat_id": "16",
            "value": "5"
           },
           {
            "stat_id": "3",
            "value": "7"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "8"
           },
           {
            "stat_id": "32",
            "value": "6"
           },
           {
            "stat_id": "42",
            "value": "4"
           },
           {
            "stat_id": "26",
            "value": "3"
           },
           {
            "stat_id": "27",
            "value": "2"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "5",
         "points_for": "46",
         "points_change": "1.5",
         "points_back": "23.5"
        }
       },
       {
        "team_key": "238.l.627060.t.7",
        "team_id": "7",
        "name": "TEAM RAICHURA",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/7",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/mlb/icon_8_lg.gif"
         }
        },
        "waiver_priority": "7",
        "number_of_moves": "3",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "6",
          "nickname": "A Yahoo User",
          "guid": "7ZGAFKFD6BXMHYLKO6INOLC2HA"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "773"
           },
           {
            "stat_id": "12",
            "value": "206"
           },
           {
            "stat_id": "13",
            "value": "807"
           },
           {
            "stat_id": "16",
            "value": "72"
           },
           {
            "stat_id": "3",
            "value": ".268"
           },
           {
            "stat_id": "50",
            "value": "1200.1"
           },
           {
            "stat_id": "28",
            "value": "79"
           },
           {
            "stat_id": "32",
            "value": "60"
           },
           {
            "stat_id": "42",
            "value": "1045"
           },
           {
            "stat_id": "26",
            "value": "3.70"
           },
           {
            "stat_id": "27",
            "value": "1.23"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "42",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "5"
           },
           {
            "stat_id": "12",
            "value": "6"
           },
           {
            "stat_id": "13",
            "value": "6"
           },
           {
            "stat_id": "16",
            "value": "1.5"
           },
           {
            "stat_id": "3",
            "value": "2"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "6.5"
           },
           {
            "stat_id": "32",
            "value": "2"
           },
           {
            "stat_id": "42",
            "value": "3"
           },
           {
            "stat_id": "26",
            "value": "4"
           },
           {
            "stat_id": "27",
            "value": "6"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "6",
         "points_for": "42",
         "points_change": "0.5",
         "points_back": "27.5"
        }
       },
       {
        "team_key": "238.l.627060.t.5",
        "team_id": "5",
        "name": "overflow hidden",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/5",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "3",
        "number_of_moves": "0",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "7",
          "nickname": "A Yahoo User",
          "guid": "TUXCAJ6Q7IOLDDOAQC4L7C5UBM"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "759"
           },
           {
            "stat_id": "12",
            "value": "183"
           },
           {
            "stat_id": "13",
            "value": "710"
           },
           {
            "stat_id": "16",
            "value": "126"
           },
           {
            "stat_id": "3",
            "value": ".283"
           },
           {
            "stat_id": "50",
            "value": "1251.2"
           },
           {
            "stat_id": "28",
            "value": "84"
           },
           {
            "stat_id": "32",
            "value": "32"
           },
           {
            "stat_id": "42",
            "value": "1033"
           },
           {
            "stat_id": "26",
            "value": "4.18"
           },
           {
            "stat_id": "27",
            "value": "1.35"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "36",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "4"
           },
           {
            "stat_id": "12",
            "value": "3"
           },
           {
            "stat_id": "13",
            "value": "3"
           },
           {
            "stat_id": "16",
            "value": "6"
           },
           {
            "stat_id": "3",
            "value": "7"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "9"
           },
           {
            "stat_id": "32",
            "value": "1"
           },
           {
            "stat_id": "42",
            "value": "1"
           },
           {
            "stat_id": "26",
            "value": "1"
           },
           {
            "stat_id": "27",
            "value": "1"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "7",
         "points_for": "36",
         "points_change": "-0.5",
         "points_back": "33.5"
        }
       },
       {
        "team_key": "238.l.627060.t.10",
        "team_id": "10",
        "name": "DANGER LEAGUE!",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/10",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "1",
        "number_of_moves": "0",
        "number_of_trades": "0",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "8",
          "nickname": "A Yahoo User",
          "guid": "XH4FWP3NIDONBCKUAAREUPYKYY"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "645"
           },
           {
            "stat_id": "12",
            "value": "179"
           },
           {
            "stat_id": "13",
            "value": "630"
           },
           {
            "stat_id": "16",
            "value": "109"
           },
           {
            "stat_id": "3",
            "value": ".273"
           },
           {
            "stat_id": "50",
            "value": "1052.0"
           },
           {
            "stat_id": "28",
            "value": "70"
           },
           {
            "stat_id": "32",
            "value": "62"
           },
           {
            "stat_id": "42",
            "value": "1041"
           },
           {
            "stat_id": "26",
            "value": "3.23"
           },
           {
            "stat_id": "27",
            "value": "1.19"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "35",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "1"
           },
           {
            "stat_id": "12",
            "value": "2"
           },
           {
            "stat_id": "13",
            "value": "1"
           },
           {
            "stat_id": "16",
            "value": "4"
           },
           {
            "stat_id": "3",
            "value": "3"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "1"
           },
           {
            "stat_id": "32",
            "value": "3"
           },
           {
            "stat_id": "42",
            "value": "2"
           },
           {
            "stat_id": "26",
            "value": "9"
           },
           {
            "stat_id": "27",
            "value": "9"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "8",
         "points_for": "35",
         "points_change": "1",
         "points_back": "34.5"
        }
       },
       {
        "team_key": "238.l.627060.t.1",
        "team_id": "1",
        "name": "JTizzle fo Shizzle",
        "url": "http://baseball.fantasysports.yahoo.com/archive/mlb/2010/627060/1",
        "team_logos": {
         "team_logo": {
          "size": "large",
          "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
         }
        },
        "waiver_priority": "2",
        "number_of_moves": "0",
        "number_of_trades": "1",
        "roster_adds": {
         "coverage_type": "week",
         "coverage_value": "25",
         "value": "0"
        },
        "managers": {
         "manager": {
          "manager_id": "2",
          "nickname": "A Yahoo User",
          "guid": "FLAB2TMDNJXTBZ67TIN2PJOPT4"
         }
        },
        "team_stats": {
         "coverage_type": "season",
         "season": "2010",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "695"
           },
           {
            "stat_id": "12",
            "value": "163"
           },
           {
            "stat_id": "13",
            "value": "644"
           },
           {
            "stat_id": "16",
            "value": "88"
           },
           {
            "stat_id": "3",
            "value": ".266"
           },
           {
            "stat_id": "50",
            "value": "1250.1"
           },
           {
            "stat_id": "28",
            "value": "76"
           },
           {
            "stat_id": "32",
            "value": "70"
           },
           {
            "stat_id": "42",
            "value": "1132"
           },
           {
            "stat_id": "26",
            "value": "3.91"
           },
           {
            "stat_id": "27",
            "value": "1.24"
           }
          ]
         }
        },
        "team_points": {
         "coverage_type": "season",
         "season": "2010",
         "total": "30",
         "stats": {
          "stat": [
           {
            "stat_id": "60",
            "value": null
           },
           {
            "stat_id": "7",
            "value": "2"
           },
           {
            "stat_id": "12",
            "value": "1"
           },
           {
            "stat_id": "13",
            "value": "2"
           },
           {
            "stat_id": "16",
            "value": "3"
           },
           {
            "stat_id": "3",
            "value": "1"
           },
           {
            "stat_id": "50",
            "value": null
           },
           {
            "stat_id": "28",
            "value": "3"
           },
           {
            "stat_id": "32",
            "value": "4"
           },
           {
            "stat_id": "42",
            "value": "8"
           },
           {
            "stat_id": "26",
            "value": "2"
           },
           {
            "stat_id": "27",
            "value": "4"
           }
          ]
         }
        },
        "team_standings": {
         "rank": "9",
         "points_for": "30",
         "points_change": "0",
         "points_back": "39.5"
        }
       }
      ]
     }
    }
   }
  }
 }
};