const { Artist } = require('../models');

exports.create = (req, res) => {
    Artist.create(req.body).then(user => res.status(201).json(user));
};

exports.list = (_, res) => {
    Artist.findAll().then(artists => {
        res.status(200).json(artists);
    });
};

exports.getArtistById = (req, res) => {
    const { id } = req.params;
    Artist.findByPk(id).then(artists => {
        if (!artists) {
            res.status(404).json({ error: 'The artist could not be found.' });
        } else {
            res.status(200).json(artists);
        }
    });

    exports.updateArtist = (req, res) => {
        const { id } = req.params;
        Artist.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
            if (!rowsUpdated) {
                res.status(404).json({ error: 'The artist could not be found.' });
            } else {
                res.status(200).json(rowsUpdated);
            }
        });
    };
};