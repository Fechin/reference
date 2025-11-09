---
title: Tensorflow
date: 2025-11-04
background: bg-[#ffa800]
tags:
  - AI
  - Python
categories:
  - Other
intro: This is a quick reference list of cheat sheets for Tensorflow. See also [Tensorflow website](https://tensorflow.org/).
---

## Imports { .cols-1 }

### General

```
import tensorflow as tf                             # root package
import tensorflow_datasets as tfds                  # dataset representation and loading
model.compile(optimizer, loss, metrics)             # compile necessary components for training and evaluation
model.fit(x_train, y_train, epoch, batch_size)      # model training
model.evaluate(x_test, y_test)                      # model evaluation
```

## Tensors { .cols-1 }

### Basic Operations
```
a = tf.constant(5) + tf.constant(3)      # tf.constant is an immutable tensor storing the fixed value
a.numpy()                                # This will return the value, which is 8
b = tf.Variable(10)                      # tf.Variable is a shared state for an entire execution time
b.assign(15)                             # this assign the new value to the variable
with tf.GradientTape() as tape:          # record operations on variables for automatic differentiation
```

### Creation

```
x = 
tf.random_normal_initializer(mean, std)            # tensor with independent N(mean,stf) entries
tf.random_uniform_initializer(min_val, max_val)    # tensor with independent Uniform(min_val, max_val) entries
x = tf.[ones|zeros](*size)          # tensor with all 1's [or 0's]
y = x.clone()                       # clone of x
with torch.no_grad():               # code wrap that stops autograd from tracking tensor history
requires_grad=True                  # arg, when set to True, tracks computation
                                    # history for future derivative calculations
```

### Dimensionality

```
tf.shape                               # shape of the tensor
tf.rank                                # number of dimension of the tensors
tf.size                                # number of elements in the tensor?
x = tf.concat(tensor_seq, axis=0)      # concatenates tensors along axis
y = tf.reshape(tensor, [new_shape])    # reshapes x into size (a,b,...)
y = tf.reshape(tensor, [(-1,a])        # reshapes x into size (b,a) for some b
y = x.permute(*dims)                   # permutes dimensions
y = tf.expand_dims(x)                  # tensor with added axis
y = tf.expand_dims(x, axis=2)          # (a,b,c) tensor -> (a,b,1,c) tensor
```

### Algebra

```
tf.add(a, b), a + b        # matrix addition
tf.multiply(a, b), a * b   # matrix-vector multiplication
tf.matmul(a, b), a @ b     # matrix multiplication
tf.transpose()             # matrix transpose
```

### GPU Usage

```
gpus = tf.config.list_physical_devices('GPU')              # check whether there is a GPU usage
if gpus:

tf.device()                                                # manual device placement
                                                           # either "/CPU:0", "/GPU:0", or other qualified name
                                                           # of the second GPU of your machine

try:
    tf.config.set_visible_devices(gpus[0], 'GPU')          # Limiting GPU memory growth


```

## Deep Learning Models { .cols-1 }

### Creating Models
```
tf.keras.Sequential                                # stack layers in a way that the computation
                                                   # will be performed sequentially
```

### Layers

```
tf.keras.layers.Dense(m,n)                          # fully connected layer from
                                                    # m to n units

tf.keras.layers.ConvXd(m,n,s)                       # X dimensional conv layer from
                                                    # m to n channels where X⍷{1,2,3}
                                                    # and the kernel size is s

tf.keras.layers.MaxPoolXd(s)                        # X dimension pooling layer
                                                    # (notation as above)

tf.keras.layers.BatchNormalization                  # batch norm layer
tf.keras.layers.RNN/LSTM/GRU                        # recurrent layers
tf.keras.layers.Dropout(rate=0.5)                   # dropout layer for any dimensional input
tf.keras.layers.Embedding(input_dim, output_dim)    # (tensor-wise) mapping from
                                                    # indices to embedding vectors
```

### Loss Functions

```
tf.keras.losses.X                   # where X is BinaryCrossentropy, BinaryFocalCrossentropy, CTC
                                    # CategoricalCrossentropy, CategoricalFocalCrossentropy,
                                    # CategoricalHinge, CosineSimilarity, Dice, Hinge, Huber
                                    # KLDivergence, LogCosh, MeanAbsoluteError, MeanAbsolutePercentageError
                                    # MeanSquaredError, MeanSquaredLogarithmicError, Poisson
                                    # Reduction, SparseCategoricalCrossentropy, SquaredHinge, Tversky
```

### Activation Functions

```
nn.X                                  # where X is ReLU, ReLU6, ELU, SELU, PReLU, LeakyReLU,
                                      # RReLu, CELU, GELU, Threshold, Hardshrink, HardTanh,
                                      # Sigmoid, LogSigmoid, Softplus, SoftShrink,
                                      # Softsign, Tanh, TanhShrink, Softmin, Softmax,
                                      # Softmax2d, LogSoftmax or AdaptiveSoftmaxWithLoss
```

### Optimizers

```
opt = tf.keras.optimizer.x(model.parameters(), ...)      # create optimizer
opt.step()                                  # update weights
optim.X                                     # where X is SGD, Adadelta, Adafactor,
                                            # Adagrad, Adam, AdamW, Adamax, Ftrl, Lion,
                                            # LossScaleOptimizer ,RMSprop or Rprop
```

### Learning rate scheduling - Callbacks

```
callbacks = tf.keras.callbacks.LearningRateScheduler(scheduler)     # create lr scheduler
model.fit(..., callbacks=[callback], ....)                          # update lr after optimizer updates weights
                                                                    # using with fit(), evaluate(), and predict()
```

### Saving and Loading Models
```
tf.keras.models.clone_model(...)         # Clone a Functional or Sequential Model instance.
tf.keras.models.load_model(...)          # Loads a model saved via model.save().
tf.keras.models.model_from_json(...)     # Parses a JSON model configuration string and returns a model instance.
tf.keras.models.save_model(...)          # Saves a model as a .keras file.
```

## Data Utilities { .cols-1 }

### Datasets

```
pip install tensorflow-datasets          # install the module
tfds.load('mnist', split, shuffle_files) # loading a dataset
```
