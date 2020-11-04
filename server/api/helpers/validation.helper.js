import { validationResult } from 'express-validator';

class ValidationHelper {
  hasErrors(request) {
    return new Promise((resolve, reject) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          validation_failed: true,
          error: errors.array(),
        });
      } else {
        resolve();
      }
    });
  }
}

export default new ValidationHelper();
