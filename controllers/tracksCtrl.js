const Track = require('../models/tracks');

const create = async (req, res) => {
  try {
    const newTrack = await Track.create(req.body);
    res.status(201).json(newTrack);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const index = async (req, res) => {
  try {
    const tracks = await Track.find();

    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const show = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);

    if (!track) return res.status(404).json({ err: 'Track not Found' });

    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!track) return res.status(404).json({ err: 'Track not Found' });

    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const deleteTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);

    if (!track) return res.status(404).json({ err: 'Track not Found' });

    res.status(204).end();
    // res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteTrack,
};
