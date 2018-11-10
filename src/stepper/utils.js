export const stepUtils = (allSteps) => ({
  isFirst: (item) =>
    allSteps.indexOf(item) === 0,

  isLast: (item) =>
    allSteps.indexOf(item) === allSteps.length - 1,
  stepBefore: (item) => allSteps[allSteps.indexOf(item) - 1] || {},
  stepAfter: (item) => allSteps[allSteps.indexOf(item) + 1] || {},
})

export const PositionEnum = {
  BEFORE: 'before',
  AFTER: 'after'
}