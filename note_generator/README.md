## Getting Started
```
pip install magenta
```

Example:
1. `basic_rnn`
```
melody_rnn_generate \
--config=basic_rnn \
--bundle_file=basic_rnn.mag \
--output_dir=./output/gen-1 \
--num_outputs=10 \
--num_steps=192 \
--primer_midi=twinkle.mid
```

2. `lookback_rnn`
```
melody_rnn_generate \
--config=lookback_rnn \
--bundle_file=lookback_rnn.mag \
--output_dir=./output/gen-2 \
--num_outputs=10 \
--num_steps=192 \
--primer_midi=twinkle.mid
```

3. `attention_rnn`
```
melody_rnn_generate \
--config=attention_rnn \
--bundle_file=attention_rnn.mag \
--output_dir=./output/gen-3 \
--num_outputs=10 \
--num_steps=192 \
--primer_midi=twinkle.mid
```

4. `mono_rnn`
```
melody_rnn_generate \
--config=mono_rnn \
--bundle_file=mono_rnn.mag \
--output_dir=./output/gen-4 \
--num_outputs=10 \
--num_steps=192 \
--primer_midi=twinkle.mid
```
