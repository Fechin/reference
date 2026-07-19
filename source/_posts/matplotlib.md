---
title: Matplotlib
date: 2026-07-19
background: bg-[#1a073e]
tags:
  - data visualization
  - matplotlib
  - plotting
categories:
  - Python
intro: |
  [Matplotlib](https://matplotlib.org/) is a comprehensive library for creating static, animated, and interactive plots in Python.
  This cheat sheet provides a production-grade reference for matplotlib ≥3.8 with emphasis on publication-quality figures, OOP interface, and performance optimization.
plugins:
  - copyCode
---

## Getting Started {.cols-2}

### Import Convention

```python
import matplotlib.pyplot as plt
import numpy as np

# For high-quality figures
plt.rcParams['figure.dpi'] = 120
plt.rcParams['savefig.dpi'] = 300
plt.rcParams['font.size'] = 10
plt.rcParams['axes.labelsize'] = 12
plt.rcParams['axes.titlesize'] = 14
plt.rcParams['legend.fontsize'] = 10
```

### Two Interfaces

| Description | Code |
|-------------|------|
| Pyplot (procedural) - quick | `plt.plot(x, y); plt.show()` |
| OOP (explicit) - production | `fig, ax = plt.subplots(); ax.plot(x, y); fig.savefig('fig.pdf')` |
| Create figure and axes | `fig, ax = plt.subplots(figsize=(8, 6))` |
| Create figure with grid | `fig, axes = plt.subplots(2, 2, figsize=(10, 8))` |
| Get current figure/axes | `fig = plt.gcf(); ax = plt.gca()` |

### Basic Plot

```python
x = np.linspace(0, 10, 100)
y = np.sin(x)
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Sine Wave")
ax.set_xlabel("x")
ax.set_ylabel("sin(x)")
plt.show()
```

---

## Plot Types {.cols-2}

### Line Plot

| Description | Code |
|-------------|------|
| Simple line plot | `ax.plot(x, y)` |
| With custom style | `ax.plot(x, y, 'r--o', linewidth=2, markersize=4)` |
| Multiple series | `ax.plot(x, y1, label='sin'); ax.plot(x, y2, label='cos'); ax.legend()` |
| Step plot | `ax.step(x, y, where='mid')` |
| Stacked lines | `ax.stackplot(x, y1, y2, labels=['A','B'])` |
| Fill between | `ax.fill_between(x, y1, y2, alpha=0.3)` |

### Scatter Plot

| Description | Code |
|-------------|------|
| Basic scatter | `ax.scatter(x, y)` |
| Scatter with sizes | `ax.scatter(x, y, s=sizes, c=colors, alpha=0.6, cmap='viridis')` |
| Scatter with categorical colors | `ax.scatter(x, y, c=labels, cmap='Set1', edgecolors='black')` |
| 3D scatter | `ax.scatter3D(x, y, z, c=z, cmap='viridis')` |

### Bar Charts

| Description | Code |
|-------------|------|
| Vertical bar | `ax.bar(categories, values, width=0.8, color='steelblue')` |
| Horizontal bar | `ax.barh(categories, values, height=0.8)` |
| Grouped bar | `ax.bar(x - width/2, y1, width, label='A'); ax.bar(x + width/2, y2, width, label='B')` |
| Stacked bar | `ax.bar(x, y1, label='A'); ax.bar(x, y2, bottom=y1, label='B')` |
| Error bars | `ax.bar(x, y, yerr=errors, capsize=5)` |

### Histograms

| Description | Code |
|-------------|------|
| Basic histogram | `ax.hist(data, bins=30, edgecolor='black')` |
| Multiple histograms | `ax.hist([data1, data2], bins=30, label=['A','B'], alpha=0.6)` |
| Density (normalized) | `ax.hist(data, bins=30, density=True, histtype='step')` |
| Cumulative | `ax.hist(data, bins=30, cumulative=True, histtype='step')` |
| 2D histogram | `ax.hist2d(x, y, bins=30, cmap='viridis')` |

### Pie Charts

| Description | Code |
|-------------|------|
| Basic pie | `ax.pie(sizes, labels=labels, autopct='%1.1f%%')` |
| Exploded pie | `ax.pie(sizes, labels=labels, explode=(0, 0.1, 0, 0), shadow=True)` |
| Donut chart | `ax.pie(sizes, labels=labels, wedgeprops=dict(width=0.3))` |
| Custom colors | `ax.pie(sizes, labels=labels, colors=plt.cm.Set3(range(len(sizes))))` |

### Box Plots

| Description | Code |
|-------------|------|
| Basic box plot | `ax.boxplot(data)` |
| Grouped box plots | `ax.boxplot([data1, data2, data3], labels=['A','B','C'])` |
| With notches | `ax.boxplot(data, notch=True, patch_artist=True)` |
| Violin plot | `ax.violinplot(data, showmeans=True, showmedians=True)` |

---

## Customization {.row-span-2}

### Figure Elements

| Description | Code |
|-------------|------|
| Title | `ax.set_title("Title", fontsize=14, fontweight='bold')` |
| Axis labels | `ax.set_xlabel("X Label", fontsize=12); ax.set_ylabel("Y Label")` |
| Axis limits | `ax.set_xlim(0, 10); ax.set_ylim(-1.5, 1.5)` |
| Grid | `ax.grid(True, linestyle='--', alpha=0.7)` |
| Legend | `ax.legend(loc='best', frameon=True, fancybox=True, shadow=True)` |
| Legend outside | `ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')` |

### Line & Marker Styles

| Description | Code |
|-------------|------|
| Linestyles | `'-'`, `'--'`, `'-.'`, `':'` |
| Markers | `'.'`, `'o'`, `'v'`, `'^'`, `'s'`, `'*'`, `'+'`, `'x'` |
| Color specification | `'r'`, `'#FF5733'`, `(0.2, 0.4, 0.6)`, `'red'` |
| Line width | `linewidth=2` or `lw=2` |
| Marker size | `markersize=6` or `ms=6` |
| Transparency | `alpha=0.5` |

### Text & Annotations

| Description | Code |
|-------------|------|
| Add text | `ax.text(x, y, "Text", fontsize=10, ha='center', va='bottom')` |
| Annotate with arrow | `ax.annotate("Peak", xy=(7, 1), xytext=(6, 1.5), arrowprops=dict(arrowstyle='->', color='red'))` |
| Math expressions | `ax.text(5, 0.5, r'$E = mc^2$', fontsize=14)` |
| Formula in title | `ax.set_title(r'$\sin(x) + \cos(x)$')` |

### Ticks & Scales

| Description | Code |
|-------------|------|
| Custom ticks | `ax.set_xticks([0, 2, 4, 6, 8, 10])` |
| Custom tick labels | `ax.set_xticklabels(['zero', 'two', 'four', 'six', 'eight', 'ten'])` |
| Rotate ticks | `plt.xticks(rotation=45)` |
| Log scale | `ax.set_xscale('log'); ax.set_yscale('log')` |
| Symlog | `ax.set_xscale('symlog', linthresh=0.01)` |
| Twin axes | `ax2 = ax.twinx(); ax2.plot(x, y2, 'r-')` |

### Colormaps

| Description | Code |
|-------------|------|
| Sequential | `'viridis'`, `'plasma'`, `'inferno'`, `'magma'`, `'cividis'` |
| Diverging | `'RdBu'`, `'RdBu_r'`, `'coolwarm'`, `'seismic'` |
| Qualitative | `'Set1'`, `'Set2'`, `'Set3'`, `'tab10'`, `'tab20'` |
| Reversed | `'viridis_r'` |
| Use colormap | `plt.cm.viridis(np.linspace(0, 1, 10))` |

### Stylesheets

| Description | Code |
|-------------|------|
| Default | `plt.style.use('default')` |
| Seaborn | `plt.style.use('seaborn-v0_8')` |
| FiveThirtyEight | `plt.style.use('fivethirtyeight')` |
| GGPlot | `plt.style.use('ggplot')` |
| Dark background | `plt.style.use('dark_background')` |
| Publication | `plt.style.use('bmh')` |
| Available styles | `print(plt.style.available)` |

---

## Subplots & Layouts {.row-span-2}

### Creating Subplots

| Description | Code |
|-------------|------|
| 2x2 grid | `fig, axes = plt.subplots(2, 2, figsize=(10, 8))` |
| Access subplot | `axes[0, 0].plot(x, y)` |
| Flatten axes array | `axes_flat = axes.flatten()` |
| Share x-axis | `fig, axes = plt.subplots(2, 1, sharex=True)` |
| Share y-axis | `fig, axes = plt.subplots(2, 1, sharey=True)` |
| Add subplot manually | `ax = fig.add_subplot(2, 2, 1)` |
| GridSpec | `gs = fig.add_gridspec(2, 2, width_ratios=[1, 2], height_ratios=[1, 2])` |
| Span multiple cells | `ax = fig.add_subplot(gs[0, :])` |

### Layout Adjustments

| Description | Code |
|-------------|------|
| Automatic spacing | `plt.tight_layout(pad=1.5)` |
| Fine-tune spacing | `plt.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1, wspace=0.3, hspace=0.3)` |
| Constrained layout | `fig, axes = plt.subplots(constrained_layout=True)` |
| Colorbar | `fig.colorbar(im, ax=axes, orientation='vertical', fraction=0.02, pad=0.02)` |

### Figure Size & DPI

| Description | Code |
|-------------|------|
| Set figure size | `fig = plt.figure(figsize=(8, 6))` |
| Set DPI | `fig.set_dpi(150)` |
| Auto-figure size | `fig.set_size_inches(8, 6)` |
| Save with DPI | `fig.savefig('fig.png', dpi=300, bbox_inches='tight')` |

---

## Advanced Visualizations {.cols-2}

### Image & Heatmap

| Description | Code |
|-------------|------|
| Display image | `ax.imshow(image, cmap='gray', interpolation='bilinear')` |
| Heatmap | `im = ax.imshow(matrix, cmap='hot', aspect='auto')` |
| Colorbar | `fig.colorbar(im, ax=ax, label='Intensity')` |
| Hide axes | `ax.axis('off')` |
| Aspect ratio | `ax.set_aspect('equal')` |

### Contour & Surface

| Description | Code |
|-------------|------|
| Contour lines | `contour = ax.contour(X, Y, Z, levels=20, cmap='viridis')` |
| Filled contour | `ax.contourf(X, Y, Z, levels=20, cmap='viridis')` |
| Contour labels | `ax.clabel(contour, inline=True, fontsize=8)` |
| 3D surface | `ax.plot_surface(X, Y, Z, cmap='viridis', alpha=0.8)` |
| 3D wireframe | `ax.plot_wireframe(X, Y, Z, color='black', alpha=0.3)` |

### 3D Plots

| Description | Code |
|-------------|------|
| Setup 3D axes | `from mpl_toolkits.mplot3d import Axes3D; fig = plt.figure(); ax = fig.add_subplot(111, projection='3d')` |
| 3D line | `ax.plot3D(x, y, z)` |
| 3D scatter | `ax.scatter3D(x, y, z, c=z, cmap='viridis')` |
| 3D bar | `ax.bar3d(x, y, z, dx, dy, dz)` |
| Set 3D view | `ax.view_init(elev=30, azim=45)` |

### Specialized Plots

| Description | Code |
|-------------|------|
| Error bars | `ax.errorbar(x, y, yerr=errors, xerr=x_errors, fmt='o', capsize=5)` |
| Stem plot | `ax.stem(x, y)` |
| Event plot | `ax.eventplot(data, lineoffsets=1, linelengths=0.5)` |
| Stream plot | `ax.streamplot(X, Y, U, V, density=1.5)` |
| Quiver (vector field) | `ax.quiver(x, y, u, v, scale=0.5)` |
| Polar plot | `ax = fig.add_subplot(111, projection='polar'); ax.plot(theta, r)` |

---

## Working with Images

| Description | Code |
|-------------|------|
| Load image | `import matplotlib.image as mpimg; img = mpimg.imread('image.jpg')` |
| Display image | `ax.imshow(img)` |
| Save image | `mpimg.imsave('output.jpg', img, dpi=300)` |
| Resize with interpolation | `ax.imshow(img, interpolation='bicubic')` |
| RGB channels | `red = img[:,:,0]; green = img[:,:,1]; blue = img[:,:,2]` |

---

## For Machine Learning

### Training Curves

| Description | Code |
|-------------|------|
| Loss vs epochs | `ax.plot(epochs, train_loss, label='Train'); ax.plot(epochs, val_loss, label='Validation')` |
| Learning rate schedule | `ax.semilogy(epochs, learning_rates)` |
| Accuracy | `ax.plot(epochs, train_acc, 'b-', label='Train'); ax.plot(epochs, val_acc, 'r-', label='Val')` |
| Multiple metrics | `ax1 = ax.twinx(); ax1.plot(epochs, loss, 'r-')` |

### Confusion Matrix

| Description | Code |
|-------------|------|
| Confusion matrix | `from sklearn.metrics import confusion_matrix; cm = confusion_matrix(y_true, y_pred)` |
| Heatmap | `im = ax.imshow(cm, cmap='Blues', interpolation='nearest')` |
| Annotate values | `for i in range(cm.shape[0]): for j in range(cm.shape[1]): ax.text(j, i, cm[i, j], ha='center', va='center')` |
| Normalized | `cm_norm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]` |

### ROC & Precision-Recall

| Description | Code |
|-------------|------|
| ROC curve | `from sklearn.metrics import roc_curve, auc; fpr, tpr, _ = roc_curve(y_true, y_scores); auc_val = auc(fpr, tpr)` |
| ROC plot | `ax.plot(fpr, tpr, label=f'AUC = {auc_val:.2f}'); ax.plot([0,1], [0,1], 'k--')` |
| Precision-Recall | `from sklearn.metrics import precision_recall_curve; precision, recall, _ = precision_recall_curve(y_true, y_scores)` |
| PR plot | `ax.plot(recall, precision, label='PR Curve')` |

### Feature Analysis

| Description | Code |
|-------------|------|
| Feature importance | `ax.barh(feature_names, importances, color='steelblue')` |
| Correlation matrix | `im = ax.imshow(corr_matrix, cmap='RdBu_r', vmin=-1, vmax=1)` |
| Pairwise scatter | `import seaborn as sns; sns.pairplot(df)` |
| Parallel coordinates | `from pandas.plotting import parallel_coordinates; parallel_coordinates(df, 'class')` |

---

## Animations

| Description | Code |
|-------------|------|
| Basic animation | `from matplotlib.animation import FuncAnimation; anim = FuncAnimation(fig, update, frames=100, interval=50)` |
| Save animation | `anim.save('animation.gif', writer='pillow', fps=20)` |
| Update function | `def update(frame): ax.clear(); ax.plot(x[:frame], y[:frame]); return ax,` |
| Interactive animation | `plt.ion(); fig, ax = plt.subplots(); ax.plot(x, y); plt.pause(0.01); plt.ioff()` |

---

## Saving & Exporting

### File Formats

| Description | Code |
|-------------|------|
| PNG (high DPI) | `fig.savefig('figure.png', dpi=300, bbox_inches='tight')` |
| PDF (vector) | `fig.savefig('figure.pdf', bbox_inches='tight')` |
| SVG (vector) | `fig.savefig('figure.svg', bbox_inches='tight')` |
| EPS (vector) | `fig.savefig('figure.eps', bbox_inches='tight')` |
| Transparent background | `fig.savefig('figure.png', transparent=True)` |
| With metadata | `fig.savefig('figure.pdf', metadata={'Author': 'Name', 'Title': 'Plot'})` |

### Publication Quality

| Description | Code |
|-------------|------|
| High-res for paper | `plt.rcParams['figure.dpi'] = 300` |
| Fonts for publication | `plt.rcParams['font.family'] = 'serif'; plt.rcParams['font.serif'] = ['Times New Roman']` |
| Multiple figures | `fig.savefig('figure.pdf', bbox_inches='tight', pad_inches=0.05)` |
| Size constraints | `fig = plt.figure(figsize=(3.4, 2.4))` (single column) |

---

## Show & Clear

| Description | Code |
|-------------|------|
| Display plot | `plt.show()` |
| Clear current figure | `plt.clf()` |
| Clear current axes | `plt.cla()` |
| Close all figures | `plt.close('all')` |
| Close specific figure | `plt.close(fig)` |
| Suppress display | `plt.ioff()` |

---

## Performance & Memory

| Description | Code |
|-------------|------|
| Fast plotting (AGG backend) | `import matplotlib; matplotlib.use('Agg')` |
| Interactive backend | `import matplotlib; matplotlib.use('TkAgg')` |
| Reduce memory | `ax.plot(x[::10], y[::10])` (downsample) |
| Efficient scatter | `ax.scatter(x, y, s=1)` (small markers) |
| Disable antialiasing | `ax.plot(x, y, antialiased=False)` |
| Batch plotting | `fig, axes = plt.subplots(2, 2); for ax in axes.flat: ax.plot(x, y)` |

---

## Common Pitfalls & Best Practices

| Pitfall | Solution |
|---------|----------|
| Mixing pyplot and OOP | Stick to one interface; prefer OOP for production |
| Overlapping legends | Place legend outside: `ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')` |
| Small fonts in publication | Set `plt.rcParams['font.size'] = 12` globally |
| Slow rendering | Downsample data or use `agg` backend |
| Figures cut off | Use `bbox_inches='tight'` in savefig |
| Memory leaks in loops | Use `plt.clf()` or `plt.close()` after each iteration |
| Inconsistent colormaps | Use same colormap for comparable visualizations |
| Missing axis labels | Always label for reproducibility |
| 3D plot overlapping | Adjust view with `ax.view_init()` |

---
