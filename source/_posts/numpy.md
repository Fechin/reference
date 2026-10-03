
---
title: NumPy
date: 2026-07-19
background: bg-[#4f6fc3]
tags:
  - scientific computing
  - numerical analysis
  - array processing
categories:
  - Python
intro: |
  [NumPy](https://numpy.org/) is the fundamental package for scientific computing with Python. This cheat sheet provides a production-grade reference for NumPy ≥2.0 with emphasis on performance, memory efficiency, and advanced array operations.
plugins:
  - copyCode
---

## Getting Started {.cols-2}

### Import Convention

```python
import numpy as np

# For performance-critical code
np.set_printoptions(precision=4, suppress=True, linewidth=120)

# Enable error handling for floating point
np.seterr(divide='raise', over='raise', under='ignore', invalid='raise')
```

### Array Creation

| Description | Code |
|-------------|------|
| From Python list | `np.array([1, 2, 3])` |
| From Python list of lists | `np.array([(1, 2, 3), (4, 5, 6)])` |
| Zeros array | `np.zeros((3, 4), dtype=np.float64)` |
| Ones array | `np.ones((2, 3), dtype=np.int64)` |
| Identity matrix | `np.eye(5, dtype=np.float32)` |
| Diagonal array | `np.diag([1, 2, 3])` |
| Full array | `np.full((2, 3), 8, dtype=np.float64)` |
| Empty (uninitialized) | `np.empty((3, 3), dtype=np.float64)` |
| Evenly spaced range | `np.linspace(0, 100, 6, dtype=np.float64)` |
| Arithmetic range | `np.arange(0, 10, 3)` |
| Log-spaced | `np.logspace(0, 3, 4, base=10)` |
| From function | `np.fromfunction(lambda i, j: i + j, (3, 3))` |
| From string | `np.fromstring('1 2 3', dtype=int, sep=' ')` |

### Random Arrays

| Description | Code |
|-------------|------|
| Uniform [0,1) | `np.random.rand(4, 5)` |
| Uniform [low, high) | `np.random.uniform(0, 100, (4, 5))` |
| Standard normal | `np.random.randn(4, 5)` |
| Normal (mean, std) | `np.random.normal(0, 1, (4, 5))` |
| Integers [low, high) | `np.random.randint(0, 10, (2, 3))` |
| Random choice | `np.random.choice([1, 2, 3, 4, 5], size=3, replace=False)` |
| Shuffle in-place | `np.random.shuffle(arr)` |
| Permutation | `np.random.permutation(10)` |
| Random seed | `np.random.seed(42)` |
| Generator (new API) | `rng = np.random.default_rng(seed=42); rng.random((3, 3))` |

---

## Array Properties {.row-span-2}

### Attributes

| Description | Code |
|-------------|------|
| Shape (dimensions) | `arr.shape` |
| Number of elements | `arr.size` |
| Number of dimensions | `arr.ndim` |
| Data type | `arr.dtype` |
| Item size (bytes) | `arr.itemsize` |
| Total memory (bytes) | `arr.nbytes` |
| Strides (memory layout) | `arr.strides` |
| Base (view check) | `arr.base` is not None |
| C-contiguous | `arr.flags['C_CONTIGUOUS']` |
| F-contiguous | `arr.flags['F_CONTIGUOUS']` |

### Type Conversion

| Description | Code |
|-------------|------|
| Convert dtype | `arr.astype(np.float32)` |
| To Python list | `arr.tolist()` |
| To bytes | `arr.tobytes()` |
| To file | `arr.tofile('data.bin')` |
| To string | `np.array2string(arr, precision=2)` |
| View as different dtype | `arr.view(np.int32)` |

---

## Indexing & Slicing {.row-span-2}

### Basic Indexing

| Description | Code |
|-------------|------|
| Single element | `arr[5]` |
| 2D element | `arr[2, 5]` |
| Single assignment | `arr[1] = 4` |
| 2D assignment | `arr[1, 3] = 10` |
| Slice (rows 0,1,2) | `arr[0:3]` |
| Slice (rows 0,1,2, col 4) | `arr[0:3, 4]` |
| First two rows | `arr[:2]` |
| All rows, column 1 | `arr[:, 1]` |
| Row 0, all columns | `arr[0, :]` |
| Step slice | `arr[0:10:2]` |
| Negative indexing | `arr[-1]`, `arr[-3:]` |
| Ellipsis (multiple dims) | `arr[..., 1]` |

### Boolean Indexing

| Description | Code |
|-------------|------|
| Boolean mask | `arr < 5` |
| Multiple conditions | `(arr1 < 3) & (arr2 > 5)` |
| OR condition | `(arr1 < 3) \| (arr2 > 5)` |
| Invert | `~arr` |
| Filter with condition | `arr[arr < 5]` |
| Where (select) | `np.where(arr < 5, arr, 0)` |
| Where (indices) | `np.where(arr < 5)` |
| Extract | `np.extract(arr < 5, arr)` |

### Fancy Indexing

| Description | Code |
|-------------|------|
| Integer list | `arr[[1, 3, 5]]` |
| 2D integer list | `arr[[0, 1], [0, 1]]` |
| Using np.ix_ | `arr[np.ix_([0, 2], [0, 2])]` |
| Select with conditions | `arr[np.where(arr > 0)]` |
| Clip values | `np.clip(arr, 0, 1)` |
| Put values | `np.put(arr, [0, 2], [10, 20])` |
| Take values | `np.take(arr, [0, 2])` |

### Advanced Indexing

| Description | Code |
|-------------|------|
| Index as array | `arr[[0, 1, 2], [0, 1, 0]]` |
| Index with masks | `arr[arr > 0.5] = 1` |
| Complex condition | `arr[(arr > 0.2) & (arr < 0.8)]` |
| Choose from arrays | `np.choose(selector, [arr1, arr2])` |
| Diagonal selection | `np.diagonal(arr, offset=0)` |
| Trace | `np.trace(arr)` |

---

## Shape Operations {.row-span-2}

### Reshaping

| Description | Code |
|-------------|------|
| Reshape (new view if possible) | `arr.reshape(3, 4)` |
| Resize (in-place, may fill) | `arr.resize((5, 6))` |
| Flatten (C-order) | `arr.flatten()` |
| Flatten (F-order) | `arr.flatten('F')` |
| Ravel (view when possible) | `arr.ravel()` |
| Transpose | `arr.T` |
| Transpose with axes | `arr.transpose(1, 0, 2)` |
| Swap axes | `arr.swapaxes(0, 1)` |
| Move axis | `np.moveaxis(arr, 0, -1)` |
| Expand dims | `np.expand_dims(arr, axis=0)` |
| Squeeze (remove size 1 dims) | `np.squeeze(arr)` |
| Broadcast to shape | `np.broadcast_to(arr, (3, 5, 5))` |

### Adding/Removing Dimensions

| Description | Code |
|-------------|------|
| New axis (view) | `arr[np.newaxis, :]` |
| New axis (at end) | `arr[:, np.newaxis]` |
| Expand dims | `np.expand_dims(arr, 1)` |
| Remove singleton dims | `arr.squeeze(axis=0)` |
| Concatenate | `np.concatenate([arr1, arr2], axis=0)` |
| Stack (new axis) | `np.stack([arr1, arr2], axis=0)` |
| Vertical stack | `np.vstack([arr1, arr2])` |
| Horizontal stack | `np.hstack([arr1, arr2])` |
| Column stack | `np.column_stack([arr1, arr2])` |
| Tile (repeat) | `np.tile(arr, (2, 3))` |
| Repeat each element | `np.repeat(arr, 3, axis=0)` |

### Splitting

| Description | Code |
|-------------|------|
| Split into N equal parts | `np.split(arr, 3)` |
| Split by indices | `np.split(arr, [2, 5])` |
| Horizontal split | `np.hsplit(arr, 5)` |
| Vertical split | `np.vsplit(arr, 3)` |
| Depth split (3D) | `np.dsplit(arr, 3)` |
| Array split (unequal) | `np.array_split(arr, 3)` |

---

## Element-wise Operations

### Arithmetic

| Description | Code |
|-------------|------|
| Addition | `np.add(arr1, arr2)` or `arr1 + arr2` |
| Subtraction | `np.subtract(arr1, arr2)` or `arr1 - arr2` |
| Multiplication | `np.multiply(arr1, arr2)` or `arr1 * arr2` |
| Division | `np.divide(arr1, arr2)` or `arr1 / arr2` |
| Floor division | `np.floor_divide(arr1, arr2)` or `arr1 // arr2` |
| Power | `np.power(arr1, arr2)` or `arr1 ** arr2` |
| Modulo | `np.mod(arr1, arr2)` or `arr1 % arr2` |
| Negative | `np.negative(arr)` or `-arr` |
| Absolute | `np.abs(arr)` |
| Sign | `np.sign(arr)` |

### Mathematical Functions

| Description | Code |
|-------------|------|
| Square root | `np.sqrt(arr)` |
| Exponential | `np.exp(arr)` |
| Natural log | `np.log(arr)` |
| Log base 10 | `np.log10(arr)` |
| Log base 2 | `np.log2(arr)` |
| Sin/Cos/Tan | `np.sin(arr)`, `np.cos(arr)`, `np.tan(arr)` |
| Arcsin/Arccos/Arctan | `np.arcsin(arr)`, `np.arccos(arr)`, `np.arctan(arr)` |
| Hyperbolic | `np.sinh(arr)`, `np.cosh(arr)`, `np.tanh(arr)` |
| Rounding | `np.round(arr, decimals=2)` |
| Ceiling | `np.ceil(arr)` |
| Floor | `np.floor(arr)` |
| Truncate | `np.trunc(arr)` |
| Degrees to radians | `np.radians(arr)` |
| Radians to degrees | `np.degrees(arr)` |

### Comparison & Logic

| Description | Code |
|-------------|------|
| Equal | `np.equal(arr1, arr2)` or `arr1 == arr2` |
| Not equal | `np.not_equal(arr1, arr2)` or `arr1 != arr2` |
| Less than | `np.less(arr1, arr2)` or `arr1 < arr2` |
| Greater than | `np.greater(arr1, arr2)` or `arr1 > arr2` |
| Less/equal | `np.less_equal(arr1, arr2)` or `arr1 <= arr2` |
| Greater/equal | `np.greater_equal(arr1, arr2)` or `arr1 >= arr2` |
| Logical AND | `np.logical_and(arr1, arr2)` |
| Logical OR | `np.logical_or(arr1, arr2)` |
| Logical NOT | `np.logical_not(arr)` |
| Logical XOR | `np.logical_xor(arr1, arr2)` |
| Is finite | `np.isfinite(arr)` |
| Is nan | `np.isnan(arr)` |
| Is inf | `np.isinf(arr)` |

---

## Aggregation & Statistics

### Reductions

| Description | Code |
|-------------|------|
| Sum (all) | `np.sum(arr)` |
| Sum (axis) | `np.sum(arr, axis=0)` |
| Mean | `np.mean(arr)` |
| Mean (axis) | `np.mean(arr, axis=1)` |
| Median | `np.median(arr)` |
| Min/Max | `np.min(arr)`, `np.max(arr)` |
| Min/Max (axis) | `np.min(arr, axis=0)`, `np.max(arr, axis=1)` |
| Standard deviation | `np.std(arr)` |
| Variance | `np.var(arr)` |
| Percentile | `np.percentile(arr, 75)` |
| Quantile | `np.quantile(arr, 0.75)` |
| Cumulative sum | `np.cumsum(arr)` |
| Cumulative product | `np.cumprod(arr)` |
| Dot product | `np.dot(arr1, arr2)` |
| Inner product | `np.inner(arr1, arr2)` |
| Outer product | `np.outer(arr1, arr2)` |

### Statistical Functions

| Description | Code |
|-------------|------|
| Correlation coefficient | `np.corrcoef(arr1, arr2)` |
| Covariance | `np.cov(arr1, arr2)` |
| Cross-correlation | `np.correlate(arr1, arr2, mode='full')` |
| Convolution | `np.convolve(arr1, arr2, mode='full')` |
| Histogram | `np.histogram(arr, bins=10)` |
| Bincount | `np.bincount(arr.astype(int))` |
| Unique values | `np.unique(arr)` |
| Unique with counts | `np.unique(arr, return_counts=True)` |
| Count non-zero | `np.count_nonzero(arr)` |
| Any/All | `np.any(arr > 0)`, `np.all(arr > 0)` |

---

## Linear Algebra

### Matrix Operations

| Description | Code |
|-------------|------|
| Matrix multiplication | `np.matmul(A, B)` or `A @ B` |
| Dot product | `np.dot(A, B)` |
| Inner product | `np.inner(A, B)` |
| Outer product | `np.outer(A, B)` |
| Trace | `np.trace(A)` |
| Determinant | `np.linalg.det(A)` |
| Rank | `np.linalg.matrix_rank(A)` |
| Condition number | `np.linalg.cond(A)` |

### Matrix Decompositions

| Description | Code |
|-------------|------|
| Inverse | `np.linalg.inv(A)` |
| Pseudo-inverse | `np.linalg.pinv(A)` |
| Eigenvalues/vectors | `np.linalg.eig(A)` |
| Eigenvalues (only) | `np.linalg.eigvals(A)` |
| SVD | `np.linalg.svd(A)` |
| QR decomposition | `np.linalg.qr(A)` |
| LU decomposition | `np.linalg.lu(A)` |
| Cholesky decomposition | `np.linalg.cholesky(A)` |

### Solving Systems

| Description | Code |
|-------------|------|
| Solve linear system | `np.linalg.solve(A, b)` |
| Least squares | `np.linalg.lstsq(A, b)` |
| Norm (Euclidean) | `np.linalg.norm(A)` |
| Norm (specific order) | `np.linalg.norm(A, ord=1)` |
| Singular values | `np.linalg.svdvals(A)` |

---

## Broadcasting & Vectorization

### Broadcasting Rules

| Description | Code |
|-------------|------|
| Scalar + array | `arr + 1` |
| 1D + 2D | `arr2d + arr1d` |
| Matching trailing dims | `arr2d + arr1d.reshape(-1, 1)` |
| Check broadcast | `np.broadcast_shapes((2,3), (3,))` |
| Explicit broadcast | `np.broadcast_to(arr1d, (3, 4))` |
| Broadcasting in ufunc | `np.add(arr2d, arr1d)` |

### Vectorization Patterns

| Description | Code |
|-------------|------|
| Vectorized addition | `arr1 + arr2` (instead of loop) |
| Vectorized condition | `np.where(cond, arr1, arr2)` |
| Vectorized selection | `arr[mask]` |
| Vectorized accumulation | `np.cumsum(arr)` |
| Element-wise operations | `np.sqrt(arr)` |
| Reduce operations | `np.sum(arr)` |
| Universal functions | `np.exp(arr)`, `np.log(arr)` |

---

## Memory & Performance

### Memory Management

| Description | Code |
|-------------|------|
| View vs copy | `arr_view = arr[:]` (view); `arr_copy = arr.copy()` (copy) |
| Check ownership | `arr.base is None` (own memory) |
| Share memory check | `np.shares_memory(arr1, arr2)` |
| Memory alignment | `np.array(arr, copy=False, order='C')` |
| Memory layout | `np.ascontiguousarray(arr)` |
| Fortran order | `np.asfortranarray(arr)` |
| Byteswap | `arr.byteswap(inplace=True)` |

### Performance Optimization

| Description | Code |
|-------------|------|
| Preallocate | `np.empty((N,))` |
| Use local variables | `np_add = np.add` |
| Avoid Python loops | Use NumPy vectorized operations |
| Out-of-place operations | `np.add(arr1, arr2, out=result)` |
| Use in-place | `arr += 1` (less memory) |
| Reduce allocations | Reuse arrays with `out=` parameter |
| Use float32 if possible | `np.float32` instead of `np.float64` |
| Use memory-mapped files | `np.memmap('data.dat', dtype='float32', mode='r', shape=(1000, 1000))` |

---

## Input/Output {.cols-2}

### Text Files

| Description | Code |
|-------------|------|
| Load text | `np.loadtxt('file.txt', delimiter=' ')` |
| Load CSV | `np.genfromtxt('file.csv', delimiter=',', skip_header=1)` |
| Load with missing values | `np.genfromtxt('file.csv', delimiter=',', filling_values=0)` |
| Save text | `np.savetxt('file.txt', arr, delimiter=' ', fmt='%.4f')` |
| Save CSV | `np.savetxt('file.csv', arr, delimiter=',', fmt='%.4f')` |

### Binary Files

| Description | Code |
|-------------|------|
| Load .npy | `np.load('file.npy')` |
| Save .npy | `np.save('file.npy', arr)` |
| Load .npz (multiple arrays) | `data = np.load('file.npz'); data['arr1']` |
| Save .npz | `np.savez('file.npz', arr1=arr1, arr2=arr2)` |
| Save compressed .npz | `np.savez_compressed('file.npz', arr1=arr1, arr2=arr2)` |
| Binary to file | `arr.tofile('data.bin')` |
| Read from file | `np.fromfile('data.bin', dtype=np.float32)` |
| Memory-mapped | `arr = np.memmap('data.dat', dtype='float32', mode='r', shape=(100, 100))` |

### Data Types

| Description | Code |
|-------------|------|
| Integer types | `np.int8`, `np.int16`, `np.int32`, `np.int64` |
| Unsigned ints | `np.uint8`, `np.uint16`, `np.uint32`, `np.uint64` |
| Floating types | `np.float16`, `np.float32`, `np.float64`, `np.float128` |
| Complex types | `np.complex64`, `np.complex128` |
| Boolean | `np.bool_` |
| Object | `np.object_` |
| String | `np.string_`, `np.unicode_` |
| Datetime | `np.datetime64`, `np.timedelta64` |
| Structured dtypes | `np.dtype([('name', 'U10'), ('age', 'i4')])` |

---

## Structured Arrays

| Description | Code |
|-------------|------|
| Create structured | `np.array([(1, 'Alice'), (2, 'Bob')], dtype=[('id','i4'), ('name','U10')])` |
| Access by field | `arr['name']` |
| Access by position | `arr[0]` |
| Multiple fields | `arr[['id', 'name']]` |
| Complex dtype | `np.dtype({'names': ['id','name'], 'formats': ['i4','U10']})` |
| Recarray (by attribute) | `arr = np.rec.array([(1,'Alice'),(2,'Bob')], dtype=[('id','i4'), ('name','U10')]); arr.name` |

---

## Datetime & Timedelta

| Description | Code |
|-------------|------|
| Create datetime | `np.datetime64('2026-07-01')` |
| Array of datetimes | `np.arange('2026-01', '2026-07', dtype='datetime64[M]')` |
| Timedelta | `np.timedelta64(1, 'D')` |
| Arithmetic | `np.datetime64('2026-07-01') - np.datetime64('2026-06-01')` |
| Extract components | `dt.astype('datetime64[Y]')` (year) |
| Day of week | `(dt.astype('datetime64[D]') - np.datetime64('1970-01-01')).astype('int64') % 7` |

---

## Common Pitfalls & Best Practices

| Pitfall | Solution |
|---------|----------|
| Copy vs view confusion | Use `arr.copy()` explicitly for independent copy |
| Mutation of views | Check with `arr.base is not None` |
| Python loops over arrays | Use vectorized operations instead of loops |
| Using int64 unnecessarily | Use `np.float32` or `np.int32` for memory efficiency |
| Mutable default arguments | Avoid `arr=[]` in functions; use `None` |
| Not specifying dtype | Specify `dtype` for precision control |
| Using `np.append` in loops | Preallocate array for better performance |
| Shape mismatch in broadcasting | Check shapes with `arr.shape` |
| Floating point comparison | Use `np.isclose()` for comparison of floats |
| Memory leak in large arrays | Use `del arr` or `arr = None` after use |
| Inconsistent random seeding | Use `np.random.seed(42)` for reproducibility |
| Using old random API | Use new `np.random.default_rng()` API |

---

