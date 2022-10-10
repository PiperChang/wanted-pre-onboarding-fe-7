import { useState } from 'react'

/**유효성 검사 Hook
 * @param {string} string 문자열
 * @param {string} pattern 패턴이 될 regExp
 * @returns {boolean} 유효성 통과한지 확인한 결과
 */
export function useValidChecker(string, pattern) {
    const re = new RegExp(pattern)
    return re.test(string)
}
