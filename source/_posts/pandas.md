---

title: Pandas
date: 2024-07-04
background: bg-[#110750]
tags:
  - data analysis
  - data manipulation
categories:
  - Python
intro: |
  [Pandas](https://pandas.pydata.org/) is a powerful data analysis and manipulation library for Python. This cheat sheet is a quick reference for Pandas beginners.
plugins:
  - copyCode

---

## Getting Started {.cols-2}

### Introduction

You’ll need to import pandas to get started:

```python
import pandas as pd
```

### Creating DataFrames

| -                                                              | -                                                   |
| -------------------------------------------------------------- | --------------------------------------------------- |
| `pd.DataFrame(data={'col1': [1, 2], 'col2': [3, 4]})`          | From a dictionary                                   |
| `pd.DataFrame(data=[{'a': 1, 'b': 2}, {'a': 3, 'b': 4}])`      | From a list of dictionaries                         |
| `pd.read_csv('file.csv')`                                      | From a CSV file                                     |
| `pd.read_excel('file.xlsx')`                                   | From an Excel file                                  |

### Inspecting Data {.row-span-2}

| -                       | -                               |
| ----------------------- | ------------------------------- |
| `df.head()`             | First 5 rows                    |
| `df.tail()`             | Last 5 rows                     |
| `df.shape`              | Number of rows and columns      |
| `df.info()`             | Info on DataFrame               |
| `df.describe()`         | Summary statistics              |
| `df.columns`            | Column names                    |
| `df.index`              | Index                           |
| `df.dtypes`             | Data types of columns           |

### Selecting Data

| -                        | -                                                 |
| ------------------------ | ------------------------------------------------- |
| `df['col1']`             | Select column                                     |
| `df[['col1', 'col2']]`   | Select multiple columns                           |
| `df.loc[0]`              | Select row by index                               |
| `df.loc[:, 'col1']`      | Select all rows for 'col1'                        |
| `df.iloc[0]`             | Select row by position                            |
| `df.iloc[0, 1]`          | Select specific value                             |
| `df[df['col1'] > 2]`     | Select rows based on condition                    |

### Data Cleaning

| -                            | -                                      |
| ---------------------------- | -------------------------------------- |
| `df.dropna()`                | Drop rows with any missing values      |
| `df.dropna(axis=1)`          | Drop columns with any missing values   |
| `df.fillna(0)`               | Replace missing values with 0          |
| `df.drop_duplicates()`       | Drop duplicate rows                    |
| `df.rename(columns={'old_name': 'new_name'})` | Rename columns      |
| `df.astype('int')`           | Change data type                       |

### Adding/Removing Data {.row-span-2}

| -                                   | -                              |
| ----------------------------------- | ------------------------------ |
| `df['col3'] = df['col1'] + df['col2']` | Add new column               |
| `df.drop('col1', axis=1)`           | Drop column                    |
| `df.append(new_row)`                | Add new row                    |
| `df.insert(2, 'new_col', new_data)` | Insert new column at position 2|

### Combining Data

| -                                             | -                                                |
| --------------------------------------------- | ------------------------------------------------ |
| `pd.concat([df1, df2])`                       | Concatenate rows                                 |
| `pd.concat([df1, df2], axis=1)`               | Concatenate columns                              |
| `pd.merge(df1, df2, on='key')`                | Merge DataFrames on key                          |
| `pd.merge(df1, df2, left_on='key1', right_on='key2')` | Merge on different keys                 |
| `df1.join(df2, lsuffix='_left', rsuffix='_right')`    | Join DataFrames                              |

### Aggregating Data

| -                                    | -                                                |
| ------------------------------------ | ------------------------------------------------ |
| `df['col1'].sum()`                   | Sum of values in column                          |
| `df['col1'].mean()`                  | Mean of values in column                         |
| `df['col1'].count()`                 | Count of values in column                        |
| `df['col1'].min()`                   | Minimum value in column                          |
| `df['col1'].max()`                   | Maximum value in column                          |
| `df['col1'].std()`                   | Standard deviation                               |
| `df['col1'].var()`                   | Variance                                         |
| `df.groupby('col1').sum()`           | Group by and sum                                 |
| `df.groupby('col1').mean()`          | Group by and mean                                |
| `df.groupby(['col1', 'col2']).count()` | Group by multiple columns                       |

### Applying Functions {.row-span-2}

| -                                  | -                                    |
| ---------------------------------- | ------------------------------------ |
| `df.apply(np.sqrt)`                | Apply function to all values         |
| `df['col1'].apply(lambda x: x ** 2)`| Apply function to column             |
| `df.applymap(str)`                 | Apply function to DataFrame elements |
| `df['col1'].map({'a': 1, 'b': 2})` | Map values                           |
| `df['col1'].replace('a', 1)`       | Replace values                       |

### Handling Dates

| -                                    | -                                          |
| ------------------------------------ | ------------------------------------------ |
| `df['date'] = pd.to_datetime(df['date'])` | Convert to datetime                      |
| `df['year'] = df['date'].dt.year`          | Extract year                              |
| `df['month'] = df['date'].dt.month`        | Extract month                             |
| `df['day'] = df['date'].dt.day`            | Extract day                               |
| `df.set_index('date', inplace=True)`       | Set date as index                         |

### Input/Output

| -                                    | -                                                |
| ------------------------------------ | ------------------------------------------------ |
| `df.to_csv('file.csv')`              | Save DataFrame to CSV                            |
| `df = pd.read_csv('file.csv')`       | Load DataFrame from CSV                          |
| `df.to_excel('file.xlsx')`           | Save DataFrame to Excel                          |
| `df = pd.read_excel('file.xlsx')`    | Load DataFrame from Excel                        |
| `from sqlalchemy import create_engine`| Import SQLAlchemy for SQL operations            |
| `engine = create_engine('sqlite:///:memory:')` | Create SQL engine                         |
| `df.to_sql('table_name', engine)`    | Save to SQL table                                |
| `df = pd.read_sql('table_name', engine)` | Load from SQL table                            |
