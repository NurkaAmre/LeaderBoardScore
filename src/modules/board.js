export default class LeaderBoard {
  constructor(leaderName, leaderScore) {
    this.leaderName = leaderName;
    this.leaderScore = leaderScore;
  }

  get name() {
    return this.leaderName;
  }

  get ncore() {
    return this.leaderScore;
  }
}