# Graph Report - matan-nayad  (2026-11-25)

## Corpus Check
- 22 files · ~51,826 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 3)

## Summary
- 1097 nodes · 2063 edges · 78 communities (47 shown, 31 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 247 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `340495a7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- constructor
- _onChangeCallback
- l_
- applyMatrix4
- s_
- updateWorldMatrix
- a_
- b_
- $v
- toJSON
- getDependency
- Cp
- isEmpty
- An
- getValueSize
- _fromTexture
- Ap
- Hv
- Sm
- gp
- di
- mocks.py
- kv
- Nt
- copySRGBToLinear
- distanceToPoint
- dd
- Tp
- pd
- at
- updateProjectionMatrix
- Hi
- sg
- wp
- CLAUDE.md
- interpolate_
- loadImageSource
- getDelta
- u_
- Vv
- CreateFromMorphTargetSequence
- Dh
- translateOnAxis
- קבצים פלוס – דף הנחיתה
- מטען נייד – בניית אתרים ואפליקציות
- fromJSON
- copyLinearToSRGB
- Lp
- getObjectByProperty
- _addNodeRef
- compose
- cross
- decompose
- distanceTo
- Do
- eM
- getNormalMatrix
- setFromCoplanarPoints
- setFromCylindrical
- setFromSpherical
- Vh
- a320/README.md
- updateMatrices

## God Nodes (most connected - your core abstractions)
1. `constructor()` - 91 edges
2. `D()` - 36 edges
3. `s_()` - 34 edges
4. `b_()` - 32 edges
5. `Cp()` - 26 edges
6. `l_()` - 21 edges
7. `Hv()` - 20 edges
8. `Ap()` - 17 edges
9. `_onChangeCallback()` - 17 edges
10. `applyMatrix4()` - 17 edges

## Surprising Connections (you probably didn't know these)
- `D()` --indirect_call--> `k()`  [INFERRED]
  a320/app.js → a320/app.js  _Bridges community 1 → community 7_
- `ke()` --indirect_call--> `_e()`  [INFERRED]
  a320/app.js → a320/app.js  _Bridges community 1 → community 17_
- `be()` --indirect_call--> `fe()`  [INFERRED]
  a320/app.js → a320/app.js  _Bridges community 1 → community 12_
- `O()` --indirect_call--> `y()`  [INFERRED]
  a320/app.js → a320/app.js  _Bridges community 3 → community 17_
- `b_()` --indirect_call--> `$e()`  [INFERRED]
  a320/app.js → a320/app.js  _Bridges community 7 → community 8_

## Import Cycles
- None detected.

## Communities (78 total, 31 thin omitted)

### Community 1 - "constructor"
Cohesion: 0.06
Nodes (68): bi(), clone(), constructor(), a(), At(), be(), c(), ce() (+60 more)

### Community 2 - "_onChangeCallback"
Cohesion: 0.06
Nodes (39): addGroup(), clampLength(), conjugate(), copy(), divideScalar(), fromArray(), fromBufferAttribute(), invert() (+31 more)

### Community 3 - "l_"
Cohesion: 0.06
Nodes (32): ad(), cd(), h_(), b(), m(), p(), v(), x() (+24 more)

### Community 4 - "applyMatrix4"
Cohesion: 0.07
Nodes (34): am(), applyAxisAngle(), applyBoneTransform(), applyEuler(), applyMatrix4(), applyQuaternion(), boneTransform(), center() (+26 more)

### Community 5 - "s_"
Cohesion: 0.12
Nodes (39): B0(), getDataURL(), Kc(), ko(), load(), c(), h(), l() (+31 more)

### Community 6 - "updateWorldMatrix"
Cohesion: 0.07
Nodes (32): add(), attach(), bind(), clear(), connect(), disconnect(), dispatchEvent(), dispose() (+24 more)

### Community 7 - "a_"
Cohesion: 0.11
Nodes (29): a_(), a(), c(), d(), f(), g(), h(), l() (+21 more)

### Community 8 - "b_"
Cohesion: 0.11
Nodes (11): b_(), Fe(), Je(), K(), Mt(), o(), r(), _t() (+3 more)

### Community 9 - "$v"
Cohesion: 0.10
Nodes (28): Dl(), dp(), e1(), G_(), _h(), j_(), ja(), jo() (+20 more)

### Community 10 - "toJSON"
Cohesion: 0.06
Nodes (35): angleTo(), computeFrenetFrames(), dot(), En(), extractPoints(), getCurveLengths(), getHex(), getHexString() (+27 more)

### Community 11 - "getDependency"
Cohesion: 0.10
Nodes (28): assignTexture(), B1(), createNodeAttachment(), createUniqueName(), F1(), Fs(), getDependency(), H1() (+20 more)

### Community 12 - "Cp"
Cohesion: 0.20
Nodes (28): Cp(), A(), be(), ce(), E(), F(), Fe(), Ge() (+20 more)

### Community 13 - "isEmpty"
Cohesion: 0.09
Nodes (28): absarc(), absellipse(), arc(), computeTangents(), computeVertexNormals(), ellipse(), expandByObject(), expandByPoint() (+20 more)

### Community 14 - "An"
Cohesion: 0.15
Nodes (23): An(), ay(), by(), cy(), dy(), ey(), a(), r() (+15 more)

### Community 15 - "getValueSize"
Cohesion: 0.12
Nodes (17): containsPoint(), _createAnimationTracks(), _createCubicSplineTrackInterpolant(), Eu(), _getArrayFromAccessor(), getBarycoord(), getInterpolation(), getUV() (+9 more)

### Community 16 - "_fromTexture"
Cohesion: 0.13
Nodes (22): _allocateTargets(), _applyPMREM(), _blur(), _cleanup(), compileCubemapShader(), compileEquirectangularShader(), _compileMaterial(), $f() (+14 more)

### Community 17 - "Ap"
Cohesion: 0.20
Nodes (15): Ap(), bt(), gt(), H(), ht(), Ie(), it(), Je() (+7 more)

### Community 18 - "Hv"
Cohesion: 0.21
Nodes (19): Hv(), A(), b(), C(), d(), E(), f(), g() (+11 more)

### Community 19 - "Sm"
Cohesion: 0.12
Nodes (18): ar(), bM(), dm(), fm(), ga(), J1(), lm(), mm() (+10 more)

### Community 20 - "gp"
Cohesion: 0.40
Nodes (5): gp(), o1(), parseAnimation(), r1(), Sp()

### Community 21 - "di"
Cohesion: 0.14
Nodes (21): A0(), da(), di(), getHSL(), go(), Io(), Ql, kh() (+13 more)

### Community 22 - "mocks.py"
Cohesion: 0.25
Nodes (9): card(), convs(), fcards(), feed_head(), frame(), ic(), nm(), rows() (+1 more)

### Community 23 - "kv"
Cohesion: 0.24
Nodes (11): e_(), b(), v(), w(), ih(), kv(), a(), c() (+3 more)

### Community 24 - "Nt"
Cohesion: 0.22
Nodes (11): applyMatrix3(), applyNormalMatrix(), Nt(), setComponent(), setW(), setX(), setXY(), setXYZ() (+3 more)

### Community 25 - "copySRGBToLinear"
Cohesion: 0.50
Nodes (4): convertSRGBToLinear(), copySRGBToLinear(), sRGBToLinear(), zr()

### Community 26 - "distanceToPoint"
Cohesion: 0.22
Nodes (10): clampPoint(), distanceSqToPoint(), distanceToPoint(), distanceToSphere(), intersectLine(), intersectsLine(), intersectsObject(), intersectsSphere() (+2 more)

### Community 27 - "dd"
Cohesion: 0.24
Nodes (6): d_(), e(), dd(), a(), l(), o()

### Community 28 - "Tp"
Cohesion: 0.27
Nodes (6): Tp(), d(), g(), je(), Mt(), x()

### Community 29 - "pd"
Cohesion: 0.22
Nodes (3): pd(), y_(), n()

### Community 30 - "at"
Cohesion: 0.25
Nodes (8): at(), distanceToPlane(), intersectBox(), intersectPlane(), intersectsBox(), intersectSphere(), intersectTriangle(), recast()

### Community 31 - "updateProjectionMatrix"
Cohesion: 0.29
Nodes (7): clearViewOffset(), getFilmHeight(), getFilmWidth(), getFocalLength(), setFocalLength(), setViewOffset(), updateProjectionMatrix()

### Community 32 - "Hi"
Cohesion: 0.33
Nodes (6): getComponent(), getW(), getX(), getY(), getZ(), Hi()

### Community 33 - "sg"
Cohesion: 0.47
Nodes (4): sg(), l(), r(), s()

### Community 34 - "wp"
Cohesion: 0.60
Nodes (6): wp(), c(), d(), f(), h(), x()

### Community 36 - "interpolate_"
Cohesion: 0.50
Nodes (5): copySampleValue_(), evaluate(), getSettings_(), interpolate_(), intervalChanged_()

### Community 37 - "loadImageSource"
Cohesion: 0.40
Nodes (5): detectSupport(), loadImageSource(), loadTexture(), loadTextureImage(), z1()

### Community 38 - "getDelta"
Cohesion: 0.50
Nodes (5): getDelta(), getElapsedTime(), start(), stop(), zd()

### Community 40 - "Vv"
Cohesion: 0.60
Nodes (4): Vv(), n(), s(), t()

### Community 41 - "CreateFromMorphTargetSequence"
Cohesion: 0.50
Nodes (3): CreateClipsFromMorphTargetSequences(), CreateFromMorphTargetSequence(), s1()

### Community 42 - "Dh"
Cohesion: 0.67
Nodes (4): Dh(), Gd(), intersectObject(), intersectObjects()

### Community 43 - "translateOnAxis"
Cohesion: 0.50
Nodes (4): translateOnAxis(), translateX(), translateY(), translateZ()

### Community 44 - "קבצים פלוס – דף הנחיתה"
Cohesion: 0.50
Nodes (3): לשנות מילה או משפט (הדרך הקלה), קבצים פלוס – דף הנחיתה, שינויים גדולים יותר

### Community 45 - "מטען נייד – בניית אתרים ואפליקציות"
Cohesion: 0.50
Nodes (3): מטען נייד – בניית אתרים ואפליקציות, עדכון פרטי קשר, פרסום ב-GitHub Pages

### Community 46 - "fromJSON"
Cohesion: 0.67
Nodes (3): calculateInverses(), fromJSON(), init()

### Community 47 - "copyLinearToSRGB"
Cohesion: 0.67
Nodes (3): convertLinearToSRGB(), copyLinearToSRGB(), dc()

### Community 48 - "Lp"
Cohesion: 0.67
Nodes (3): D1(), L1(), Lp()

### Community 49 - "getObjectByProperty"
Cohesion: 0.67
Nodes (3): getObjectById(), getObjectByName(), getObjectByProperty()

## Knowledge Gaps
- **31 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `constructor()` connect `constructor` to `app.js`, `_onChangeCallback`, `l_`, `s_`, `updateWorldMatrix`, `toJSON`, `isEmpty`, `fromJSON`, `_fromTexture`, `Ap`, `Do`, `updateProjectionMatrix`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Are the 23 inferred relationships involving `constructor()` (e.g. with `a()` and `bt()`) actually correct?**
  _`constructor()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.00816326530612245 - nodes in this community are weakly interconnected._
- **Why does `Hv()` connect `Hv` to `app.js`, `constructor`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Are the 17 inferred relationships involving `D()` (e.g. with `constructor()` and `be()`) actually correct?**
  _`D()` has 17 INFERRED edges - model-reasoned connections that need verification._
- **Should `constructor` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Why does `b_()` connect `b_` to `app.js`, `constructor`, `a_`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._