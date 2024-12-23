import {
  TeamName as CSKName,
  Players as CSKPlayers,
  Coach as CSKCoach,
  description as CSKDescription,
} from "./CSK.js";
import {
  TeamName as MIName,
  Players as MIPlayers,
  Coach as MICoach,
  description as MIDescription,
} from "./MI.js";
import {
  TeamName as RCBName,
  Players as RCBPlayers,
  Coach as RCBCoach,
  description as RCBDescription,
} from "./RCB.js";
import {
  TeamName as SRHName,
  Players as SRHPlayers,
  Coach as SRHCoach,
  description as SRHDescription,
} from "./SRH.js";
import {
  TeamName as RRName,
  Players as RRPlayers,
  Coach as RRCoach,
  description as RRDescription,
} from "./RR.js";
import {
  TeamName as KKRName,
  Players as KKRPlayers,
  Coach as KKRCoach,
  description as KKRDescription,
} from "./KKR.js";

console.log(CSKName, CSKPlayers, CSKCoach);
CSKDescription();

console.log(MIName, MIPlayers, MICoach);
MIDescription();

console.log(RCBName, RCBPlayers, RCBCoach);
RCBDescription();

console.log(SRHName, SRHPlayers, SRHCoach);
SRHDescription();

console.log(RRName, RRPlayers, RRCoach);
RRDescription();

console.log(KKRName, KKRPlayers, KKRCoach);
KKRDescription();
