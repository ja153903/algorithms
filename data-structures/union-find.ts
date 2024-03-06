export class UnionFind {
  private numNodes: number;
  private rank: number[];
  private parent: number[];

  constructor(n: number) {
    this.numNodes = n;
    this.rank = new Array(n).fill(0);
    this.parent = new Array(n);

    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
    }
  }

  union(u: number, v: number) {
    const uParent = this.find(u);
    const vParent = this.find(v);

    if (uParent === vParent) {
      return;
    }

    if (this.rank[uParent] < this.rank[vParent]) {
      this.parent[uParent] = vParent;
      this.rank[vParent] += 1;
    } else {
      this.parent[vParent] = uParent;
      this.rank[uParent] += 1;
    }
  }

  find(node: number): number {
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]);
    }

    return this.parent[node];
  }

  get numConnectedComponents(): number {
    const uniqParents = new Set<number>();

    for (let i = 0; i < this.numNodes; i += 1) {
      uniqParents.add(this.find(i));
    }

    return uniqParents.size;
  }
}
