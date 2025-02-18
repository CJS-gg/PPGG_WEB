const MmrUtils = () => {};

/**
 * 예상 승률 계산
 * @param {Number} P_op : 상대 점수
 * @param {Number} P_me : 내 점수
 * @returns {Number} W_e : 예상 승률
 */
MmrUtils.expectedWinRate = (P_op, P_me) => {
  const W_e = 1 / (10 ** ((P_op - P_me) / 400) + 1);
  return W_e;
};

/**
 * mmr 포인트 계산
 * @param {Object} winner : 승자 객체
 * @param {Object} loser : 패자 객체
 * @returns {Number} point :  포인트
 */
MmrUtils.getMmrElo = (winner, loser) => {
  if (!MmrUtils.checkBatchTest(winner, loser)) return 0;
  const winnerExpectedWinRate = MmrUtils.expectedWinRate(winner.mmr, loser.mmr);
  const loserExpectedWinRate = MmrUtils.expectedWinRate(loser.mmr, winner.mmr);
  const K = 12;
  return Number(
    (K * (1 + winnerExpectedWinRate - loserExpectedWinRate)).toFixed(0)
  );
};

/**
 * mmr 포인트 계산
 * @param {Object} winner : 승자 객체
 * @param {Object} loser : 패자 객체
 * @returns {Number} point :  포인트
 */
MmrUtils.getMmr = (winner, loser) => {
  if (!MmrUtils.checkBatchTest(winner, loser)) return 0;
  const K = 12;
  return Number((K * (1 + winner.winRate - loser.winRate)).toFixed(0));
};

/**
 * 해당 유저들의 배치고사 여부
 * @param {Array} args : 유저 객체 배열
 * @returns {Boolean} 배치고사 여부
 */
MmrUtils.checkBatchTest = (...args) => {
  let result = true;
  args.map((user) => {
    if (Number(user.winPoints) + Number(user.losePoints) < 10) {
      result = false;
    }
  });
  return result;
};

export default MmrUtils;
