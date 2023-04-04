import { Router } from 'express';
import SongController from '../controllers/song-controller';

const router = Router();


router.get('/', SongController.root);
router.get('/all', SongController.getAll);

export default router;