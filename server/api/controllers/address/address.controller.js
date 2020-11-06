import AddressService from '../../services/address.service';
import ValidationHelper from '../../helpers/validation.helper';

export class AddressController {
  async create(request, response) {
    try {
      await ValidationHelper.hasErrors(request);
      const {
        street,
        number,
        city,
        neighborhood,
        state,
      } = request.body;
      const { id } = request.params;
      const address = (await AddressService.create(
        id,
        street,
        number,
        neighborhood,
        city,
        state,
      )).toJSON();
      delete address.MemberId;
      return response.status(201).json(address);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }
}
export default new AddressController();
