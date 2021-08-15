import * as express from 'express';
import CharacterService from '../services/character';
import characterModel from '../models/character';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const characterService = new CharacterService(characterModel);
  const characters = characterService.find();
  return res.status(200).json(characters);
});

export default router;
