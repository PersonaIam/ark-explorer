import mixins from '@/mixins'

describe('readable timestamp mixin', () => {
  it('should properly format the given data', () => {
    expect(mixins.readableTimestamp(22231900, 0)).toEqual('16.10.2018 07:31:40')
  })
})
