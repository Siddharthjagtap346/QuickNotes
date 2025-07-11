const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const auth = require('../middleware/authMiddleware');

// GET notes for logged-in user
router.get('/', auth, async (req, res) => {
  const notes = await Note.find({ user: req.user });
  res.json(notes);
});

// POST a new note
router.post('/', auth, async (req, res) => {
  const note = new Note({ ...req.body, user: req.user });
  const saved = await note.save();
  res.json(saved);
});

// PUT update
router.put('/:id', auth, async (req, res) => {
  const updated = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete('/:id', auth, async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ message: 'Deleted' });
});

module.exports = router;
