export class BiMap<T, U> {
  private fwd: Map<T, U>
  private bck: Map<U, T>

  constructor() {
    this.fwd = new Map()
    this.bck = new Map()
  }

  hasFwd(item: T): boolean {
    return this.fwd.has(item)
  }

  hasBck(item: U): boolean {
    return this.bck.has(item)
  }

  // NOTE: Not sure how useful this one will be
  // but I guess it's good to have a generic one that checks
  // if the entry exists anyway
  has(item: T | U): boolean {
    return this.hasFwd(item as T) || this.hasBck(item as U)
  }

  getFwd(item: T): U | undefined {
    return this.fwd.get(item)
  }

  getBck(item: U): T | undefined {
    return this.bck.get(item)
  }

  // NOTE: Not sure how useful this one will be
  // but I guess it's good to have a generic one that checks
  // if the entry exists anyway
  get(item: T | U): T | U | undefined {
    return this.getFwd(item as T) ?? this.getBck(item as U)
  }

  setFwd(key: T, value: U) {
    this.fwd.set(key, value)
  }

  setBck(key: U, value: T) {
    this.bck.set(key, value)
  }

  set(t: T, u: U) {
    this.setFwd(t, u)
    this.setBck(u, t)
  }
}
