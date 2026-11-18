
---
title: Pandas
date: 2026-07-19
background: bg-[#110750]
tags:
  - data analysis
  - data manipulation
categories:
  - Python
intro: |
  [Pandas](https://pandas.pydata.org/) is a powerful data analysis and manipulation library for Python. This cheat sheet provides a comprehensive reference for modern pandas (≥2.2) with emphasis on performance, nullable dtypes, and PyArrow integration.
plugins:
  - copyCode
---

## Getting Started {.cols-2}

### Import Convention

```python
import pandas as pd
import numpy as np

# Enable future features (Pandas 2.2+)
pd.options.future.infer_string = True      # Arrow-backed strings
pd.options.mode.copy_on_write = True       # Lazy copying, memory efficient
pd.set_option('display.max_columns', None) # Full display in notebooks

# Optional: suppress performance warnings
import warnings
warnings.filterwarnings('ignore', category=pd.errors.PerformanceWarning)
```

### Creating DataFrames

| -                                                         | -                           |
| --------------------------------------------------------- | --------------------------- |
| From a dictionary                                         | `pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})` |
| From a list of dictionaries                               | `pd.DataFrame([{'a': 1, 'b': 2}, {'a': 3, 'b': 4}])` |
| From a CSV file (optimized)                               | `pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')` |
| From a Parquet file                                       | `pd.read_parquet('file.parquet', engine='pyarrow')` |
| From an Excel file                                        | `pd.read_excel('file.xlsx', engine='openpyxl')` |
| From a SQL query                                          | `pd.read_sql('SELECT * FROM table', con, index_col='id', parse_dates=['date'])` |
| From a dictionary of arrays                               | `pd.DataFrame.from_dict(data, orient='index')` |
| From a list of tuples                                     | `pd.DataFrame.from_records([(1,2),(3,4)], columns=['a','b'])` |
| Empty DataFrame with columns                              | `pd.DataFrame(columns=['col1','col2'])` |
| From a JSON file                                          | `pd.read_json('file.json', orient='records', lines=True)` |
| From clipboard                                            | `pd.read_clipboard()` |

### Inspecting Data {.row-span-2}

| -               | -                          |
| --------------- | -------------------------- |
| First n rows (default 5) | `df.head(10)` |
| Last n rows (default 5)  | `df.tail(10)` |
| Number of rows and columns | `df.shape` |
| Detailed info (memory, dtypes, nulls) | `df.info(show_counts=True, memory_usage='deep')` |
| Summary statistics for numeric columns | `df.describe(percentiles=[.25,.5,.75], include='all')` |
| Column names as list | `df.columns.tolist()` |
| Index object | `df.index` |
| Data types of columns | `df.dtypes` |
| Memory usage per column | `df.memory_usage(deep=True)` |
| Value counts with proportions | `df['col'].value_counts(dropna=False, normalize=True)` |
| Unique values in column | `df['col'].unique()` |
| Number of unique values | `df['col'].nunique(dropna=False)` |
| Random sample of rows | `df.sample(n=5, random_state=42)` |
| Check if DataFrame is empty | `df.empty` |

### Selecting Data

| -                      | -                              |
| ---------------------- | ------------------------------ |
| Select a single column (as Series) | `df['col']` or `df.col` |
| Select multiple columns | `df[['col1', 'col2']]` |
| Select rows by label index | `df.loc[5:10]` |
| Select rows by integer position | `df.iloc[0:5]` |
| Select a specific cell by label | `df.at[5, 'col']` |
| Select a specific cell by position | `df.iat[0, 1]` |
| Filter rows by condition | `df[df['col'] > 2]` |
| Filter using query string (fast) | `df.query('col > 2 and col2 == "foo"')` |
| Filter with multiple conditions | `df[(df['col']>2) & (df['col2']=='bar')]` |
| Select columns by data type | `df.select_dtypes(include=['number', 'bool'])` |
| Select first row | `df.iloc[0]` |
| Select last row | `df.iloc[-1]` |
| Select random row | `df.sample(1)` |

### Data Cleaning

| -                                             | -                                    |
| --------------------------------------------- | ------------------------------------ |
| Drop rows with any missing values             | `df.dropna(how='any', axis=0)` |
| Drop rows where all values are missing        | `df.dropna(how='all', axis=0)` |
| Drop columns with any missing values          | `df.dropna(axis=1, how='any')` |
| Drop columns where all values are missing     | `df.dropna(axis=1, how='all')` |
| Fill missing values with a scalar             | `df.fillna(0, inplace=False)` |
| Forward fill missing values                   | `df.ffill(axis=0)` |
| Backward fill missing values                  | `df.bfill(axis=0)` |
| Interpolate missing values                    | `df.interpolate(method='linear', limit_direction='both')` |
| Replace values using dict or regex            | `df.replace({'old': 'new'}, regex=True)` |
| Rename columns                                | `df.rename(columns={'old':'new'})` |
| Rename index labels                           | `df.rename(index={0:'first'})` |
| Drop duplicate rows                           | `df.drop_duplicates(subset=['col'], keep='first')` |
| Change column data type (nullable int)        | `df = df.astype({'col': 'Int64'})` |
| Convert to Arrow-backed string dtype          | `df['col'] = df['col'].astype('string[pyarrow]')` |
| Drop columns with variance below threshold    | `df.loc[:, df.std() > threshold]` |
| Clip values to a range                        | `df['col'].clip(lower=0, upper=100)` |

### Adding/Removing Data {.row-span-2}

| -                                      | -                               |
| -------------------------------------- | ------------------------------- |
| Add a new column by assignment         | `df['new'] = df['a'] + df['b']` |
| Add multiple new columns               | `df.assign(new1 = df.a + df.b, new2 = df.a - df.b)` |
| Insert column at a specific position   | `df.insert(2, 'new_col', values)` |
| Remove and return a column             | `df.pop('col')` |
| Drop a column                          | `df.drop('col', axis=1, inplace=False)` |
| Drop a row by index label              | `df.drop(0, axis=0)` |
| Add a single row                       | `df.loc[len(df)] = [1,2,3]` |
| Concatenate DataFrames row-wise        | `pd.concat([df1, df2], ignore_index=True)` |
| Concatenate DataFrames column-wise     | `pd.concat([df1, df2], axis=1)` |
| Concatenate with group keys            | `pd.concat([df1, df2], keys=['A','B'])` |
| **Note:** `df.append()` is deprecated. Use `pd.concat()` instead. |

### Combining Data

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Merge two DataFrames on a key (inner join)            | `pd.merge(df1, df2, on='key')` |
| Merge two DataFrames (outer join)                     | `pd.merge(df1, df2, on='key', how='outer')` |
| Merge two DataFrames (left/right join)                | `pd.merge(df1, df2, on='key', how='left')` |
| Merge on different key columns                        | `pd.merge(df1, df2, left_on='key1', right_on='key2')` |
| Merge with validation and metadata                    | `pd.merge(df1, df2, on='key', validate='1:m', suffixes=('_l','_r'), indicator=True)` |
| Join DataFrames on index                              | `df1.join(df2, how='inner', lsuffix='_l', rsuffix='_r')` |
| Cartesian product (cross join)                        | `df1.join(df2, how='cross')` |
| Fill missing values from another DataFrame            | `df1.combine_first(df2)` |

## Advanced Indexing

### MultiIndex / Hierarchical Indexing

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Create a MultiIndex from tuples                        | `pd.MultiIndex.from_tuples([('A',1), ('A',2), ('B',1), ('B',2)])` |
| Set multiple columns as index                          | `df.set_index(['col1', 'col2'])` |
| Select all rows at first level                         | `df.loc[('A', slice(None)), 'x']` |
| Cross-section selection                                | `df.xs('A', level=0)` |
| Get values of a specific index level                   | `df.index.get_level_values(0)` |
| Pivot a level to columns (unstack)                     | `df.unstack(level=0)` |
| Compress columns to index (stack)                      | `df.stack()` |
| Swap levels of MultiIndex                              | `df.swaplevel()` |
| Sort by a specific index level                         | `df.sort_index(level=1)` |
| Reorder index levels                                   | `df.reorder_levels([1,0])` |

### Categorical Data

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Create an ordered categorical column                   | `df['cat'] = pd.Categorical(df['col'], categories=['low','med','high'], ordered=True)` |
| Get integer codes for categories                       | `df['cat'].cat.codes` |
| Reorder categories                                     | `df['cat'].cat.reorder_categories(['high','med','low'])` |
| Add new categories                                     | `df['cat'].cat.add_categories(['very_high'])` |
| Remove unused categories                               | `df['cat'].cat.remove_unused_categories()` |
| Group by categorical (skip unobserved)                 | `df.groupby('cat', observed=True).mean()` |

## Time Series Operations

### Date Handling

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Convert string column to datetime (with format)        | `df['date'] = pd.to_datetime(df['date'], format='%Y-%m-%d')` |
| Extract year from datetime                             | `df['year'] = df['date'].dt.year` |
| Extract month from datetime                            | `df['month'] = df['date'].dt.month` |
| Extract day from datetime                              | `df['day'] = df['date'].dt.day` |
| Extract day of week (0=Monday)                         | `df['dayofweek'] = df['date'].dt.dayofweek` |
| Extract quarter                                        | `df['quarter'] = df['date'].dt.quarter` |
| Check if date is weekend                               | `df['is_weekend'] = df['date'].dt.dayofweek >= 5` |
| Set datetime column as index                           | `df.set_index('date', inplace=True)` |
| Generate a date range                                  | `pd.date_range('2026-01-01', periods=100, freq='D')` |
| Add a date offset to each date                         | `df['date'] + pd.DateOffset(months=1)` |

### Resampling & Frequency Conversion

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Downsample to monthly frequency (aggregate)            | `df.resample('M').mean()` |
| Upsample to daily frequency (forward fill)             | `df.resample('D').ffill(limit=2)` |
| Custom aggregation during resampling                   | `df.resample('QE-DEC').agg(['sum', 'mean'])` |
| Resample with custom label and closed side             | `df.resample('W-MON', label='right', closed='right')` |
| Business quarter frequency                             | `df.resample('BQ').mean()` |
| Custom business days (skip holidays)                   | `from pandas.tseries.offsets import CustomBusinessDay`<br>`offset = CustomBusinessDay(weekmask='Mon Tue Wed Thu Fri', holidays=['2026-07-04'])`<br>`df.resample(offset)` |
| Change frequency without aggregation (asfreq)          | `df.asfreq('D', method='ffill', limit=2)` |
| Shift values forward/backward                          | `df['shifted'] = df['value'].shift(1)` |
| Create lag/lead columns                                | `df['lag_3'] = df['value'].shift(3)` |

## Transformation Operations

### Reshaping

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Pivot without aggregation (exact reshape)              | `df.pivot(index='date', columns='variable', values='value')` |
| Pivot with aggregation (pivot table)                   | `pd.pivot_table(df, values='value', index='date', columns='var', aggfunc='mean', fill_value=0, margins=True)` |
| Melt from wide to long format                          | `df.melt(id_vars=['date'], value_vars=['a','b'], var_name='var', value_name='val')` |
| Stack/unstack MultiIndex                               | `df.stack(future_stack=True)` / `df.unstack()` |
| Cross-tabulation with normalization                    | `pd.crosstab(df['col1'], df['col2'], normalize='columns', margins=True, margins_name='Total')` |
| Explode list-like column into rows                     | `df.explode('list_column', ignore_index=True)` |

### Aggregating Data

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Sum of values                                          | `df['col'].sum(skipna=True)` |
| Mean of values                                         | `df['col'].mean()` |
| Count of non-NA values                                 | `df['col'].count()` |
| Minimum value                                          | `df['col'].min()` |
| Maximum value                                          | `df['col'].max()` |
| Standard deviation (sample)                            | `df['col'].std(ddof=1)` |
| Variance (sample)                                      | `df['col'].var(ddof=1)` |
| Quantile (e.g., 75th percentile)                       | `df['col'].quantile(0.75)` |
| Group by a column and sum                              | `df.groupby('col1')['col2'].sum()` |
| Group by and aggregate multiple columns                | `df.groupby('col1').agg({'col2': ['sum','mean'], 'col3': 'max'})` |
| Named aggregation (new style)                          | `df.groupby('group').agg(avg_value=('value','mean'), max_date=('date','max'), count=('value','count'))` |
| Custom aggregation function                            | `df.groupby('col1').agg(lambda x: x.max() - x.min())` |

### GroupBy Advanced

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Transform: broadcast result to original rows          | `df['mean_per_group'] = df.groupby('group')['value'].transform('mean')` |
| Filter groups based on condition                      | `df.groupby('group').filter(lambda x: x['value'].sum() > 10)` |
| Apply custom function to each group                   | `df.groupby('group').apply(lambda g: g.sort_values('date').head(2), include_groups=False)` |
| Pipe transformation after groupby                     | `df.groupby('group').pipe(lambda g: g['value'].transform(lambda x: (x - x.mean()) / x.std()))` |
| Groupby with observed categoricals                    | `df.groupby('category', observed=True).mean()` |

### Window Functions

| -                                                     | -                       |
| ----------------------------------------------------- | ----------------------- |
| Rolling mean with window size 5                       | `df['col'].rolling(window=5, min_periods=3, center=True).mean()` |
| Multiple aggregations on rolling window               | `df['col'].rolling(3).agg(['sum','mean', lambda x: x.max() - x.min()])` |
| Rolling with custom weights                           | `df['col'].rolling(window=10, win_type='gaussian', weights=lambda x: np.exp(-x**2)).mean()` |
| Expanding statistics (all data up to current point)   | `df['col'].expanding(min_periods=2).std()` |
| Exponentially weighted moving average                 | `df['col'].ewm(span=10, adjust=True, ignore_na=False).mean()` |
| Exponentially weighted variance                       | `df['col'].ewm(alpha=0.3, min_periods=5).var()` |
| Apply custom function to rolling window              | `df['col'].rolling(3).apply(lambda x: x.sum(), raw=True)` |

### Applying Functions {.row-span-2}

| -                                    | -                                    |
| ------------------------------------ | ------------------------------------ |
| Apply function element-wise to a column | `df['col'].apply(lambda x: x**2)` |
| Apply function row-wise               | `df.apply(lambda row: row['a'] + row['b'], axis=1)` |
| Apply function element-wise to entire DataFrame | `df.map(lambda x: x.upper() if isinstance(x,str) else x)` (**Note:** `applymap` is deprecated) |
| Map values using a dictionary         | `df['col'].map({'a':1,'b':2}, na_action='ignore')` |
| Vectorized string operations          | `df['col'].str.upper()`, `df['col'].str.contains('pattern')` |
| Vectorized datetime operations        | `df['date'].dt.year`, `df['date'].dt.dayofweek` |
| Fast arithmetic using eval (numexpr) | `df.eval('c = a * b + 2 * d', engine='numexpr')` |
| Fast filtering using query (numexpr) | `df.query('a > b & c.str.contains("foo")')` |
| Chain operations with pipe           | `df.pipe(lambda d: d.assign(ratio=d.a/d.b)).pipe(...)` |

### String Operations

| -                                    | -                                    |
| ------------------------------------ | ------------------------------------ |
| Convert to uppercase/lowercase       | `df['col'].str.upper()`, `df['col'].str.lower()` |
| Check if string contains pattern     | `df['col'].str.contains('pattern', regex=True, na=False)` |
| Split string into columns            | `df['col'].str.split(',', expand=True, n=1)` |
| Replace using regular expression     | `df['col'].str.replace(r'\s+', '_', regex=True)` |
| Extract capture groups into columns  | `df['col'].str.extract(r'(\d+)-(\w+)')` |
| Extract all matches                  | `df['col'].str.extractall(r'(\d+)')` |
| Find all matches (returns list)      | `df['col'].str.findall(r'\d+')` |
| Concatenate strings with separator   | `df['col'].str.cat(sep='|')` |
| Pad strings to fixed width           | `df['col'].str.pad(width=10, side='left', fillchar='0')` |
| Extract substring                    | `df['col'].str.slice(start=0, stop=5)` |
| Get string length                    | `df['col'].str.len()` |
| Check start/end of string            | `df['col'].str.startswith('prefix')`, `df['col'].str.endswith('.csv')` |
| Strip whitespace                     | `df['col'].str.strip()`, `df['col'].str.lstrip()`, `df['col'].str.rstrip()` |

## Performance & Memory Optimization

### Performance Settings

| -                                    | -                                    |
| ------------------------------------ | ------------------------------------ |
| Enable copy-on-write (Pandas 2.0+)   | `pd.options.mode.copy_on_write = True` |
| Fast arithmetic with eval            | `df.eval('c = a * b + 2 * d', engine='numexpr')` |
| Fast filtering with query            | `df.query('a > b and c == "foo"', engine='numexpr')` |
| Read large CSV in chunks            | `for chunk in pd.read_csv('large.csv', chunksize=100000, dtype_backend='pyarrow'): process(chunk)` |
| Convert to numpy array (avoid copy) | `arr = df[['a','b']].to_numpy(copy=False)` |
| Memory map large files              | `df = pd.read_csv('large.csv', memory_map=True)` |
| Use PyArrow backend for CSV         | `pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')` |

### Memory Optimization

| -                                    | -                                    |
| ------------------------------------ | ------------------------------------ |
| Downcast integer columns             | `def downcast(df):`<br>`  for col in df.select_dtypes(include='integer'):`<br>`    df[col] = pd.to_numeric(df[col], downcast='unsigned')`<br>`  for col in df.select_dtypes(include='float'):`<br>`    df[col] = pd.to_numeric(df[col], downcast='float')`<br>`  return df` |
| Convert to categorical if low cardinality | `for col in df.select_dtypes(include='object'):`<br>`  if df[col].nunique() / len(df) < 0.05:`<br>`    df[col] = df[col].astype('category')` |
| Convert all to Arrow dtypes          | `df = df.convert_dtypes(dtype_backend='pyarrow')` |
| Use sparse arrays for zeros          | `df['sparse'] = pd.arrays.SparseArray(df['col'], fill_value=0)` |
| Diagnose memory usage                | `df.memory_usage(deep=True)` |

## Input/Output {.cols-2}

| -                                              | -                                    |
| ---------------------------------------------- | ------------------------------------ |
| Save to CSV (optimized)                        | `df.to_csv('file.csv', index=False, encoding='utf-8')` |
| Load from CSV (optimized)                      | `df = pd.read_csv('file.csv', engine='pyarrow', dtype_backend='pyarrow')` |
| Save to Parquet (fast, compressed)             | `df.to_parquet('file.parquet', engine='pyarrow')` |
| Load from Parquet                              | `df = pd.read_parquet('file.parquet', engine='pyarrow')` |
| Save to Excel                                  | `df.to_excel('file.xlsx', sheet_name='Sheet1', engine='openpyxl')` |
| Load from Excel                                | `df = pd.read_excel('file.xlsx', sheet_name=0, engine='openpyxl')` |
| Save to JSON (line-delimited)                  | `df.to_json('file.json', orient='records', lines=True)` |
| Load from JSON (line-delimited)                | `df = pd.read_json('file.json', orient='records', lines=True)` |
| Save to SQL table                              | `df.to_sql('table', con, if_exists='replace', index=False)` |
| Load from SQL query                            | `df = pd.read_sql('SELECT * FROM table', con, index_col='id', parse_dates=['date'])` |
| Copy to/from clipboard                         | `df.to_clipboard()` / `pd.read_clipboard()` |
| Save to/from pickle (fast but unsafe)          | `df.to_pickle('file.pkl')` / `pd.read_pickle('file.pkl')` |
| Save to/from Feather (fast)                    | `df.to_feather('file.feather')` / `pd.read_feather('file.feather')` |
| Save to/from HDF5                              | `df.to_hdf('file.h5', key='data', mode='w')` / `pd.read_hdf('file.h5', key='data')` |

## Common Pitfalls & Best Practices

| Pitfall | Solution |
|---------|----------|
| Chained indexing (creates views) | Use `df.loc[df.a > 0, 'b']` instead of `df[df.a > 0]['b']` |
| In-place mutation of large DataFrames | Use `inplace=False` (default) for method chaining; avoid mutation unless necessary |
| Slicing without copy | Use `df.copy()` when you need an independent slice |
| Slow datetime parsing | Always specify `format` in `pd.to_datetime()` for 10x speedup |
| Memory bloat from object dtype | Use `categorical` dtype for low cardinality columns (<5% unique) |
| Ambiguous merge relationships | Specify `validate` in merge ('1:1', '1:m', etc.) to catch errors |
| Groupby with unused categories | Use `observed=True` to skip unobserved categories in groupby |
| Slow loops with `apply` | Use vectorized operations when possible (`df['a'] + df['b']` vs `apply`) |
| Deprecated `append()` | Use `pd.concat([df, other])` instead |
| Deprecated `applymap()` | Use `df.map()` instead (Pandas 2.2+) |
| Missing `pd.NA` handling | Check for `pd.NA` when using nullable dtypes |
| Large CSV without optimization | Enable copy-on-write and use PyArrow backend |

## Deprecations & Version Notes

| Version | Deprecated/Removed | Replacement |
|---------|-------------------|-------------|
| 1.4.0 | `df.append()` | `pd.concat([df, other])` |
| 2.2.0 | `df.applymap()` | `df.map()` |
| 2.0.0 | `df.astype('int')` with NA | Use nullable `'Int64'` |
| 2.0.0 | Inferred string dtype | Use `pd.options.future.infer_string = True` |
| 2.0.0 | `pd.DataFrame.to_csv()` with `compression` | Use `compression='gzip'` explicitly |


## Official Documentation & Resources

- [pandas.pydata.org](https://pandas.pydata.org/)
- [pandas GitHub](https://github.com/pandas-dev/pandas)
- [PyArrow integration](https://arrow.apache.org/docs/python/pandas.html)
- [API Reference](https://pandas.pydata.org/docs/reference/index.html)
- [User Guide](https://pandas.pydata.org/docs/user_guide/index.html)
```

