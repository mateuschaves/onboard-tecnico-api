import MemberService from '../../services/member.service';
import AddressService from '../../services/address.service';
import ValidationHelper from '../../helpers/validation.helper';

export class MemberController {
  async all(request, response) {
    const { page, limit } = request.query;

    try {
      await ValidationHelper.hasErrors(request);
      const members = await MemberService.all(page, limit);
      return response.status(200).json(members);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }

  byId(req, res) {
    MemberService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  async create(request, response) {
    try {
      await ValidationHelper.hasErrors(request);
      const {
        name,
        phone,
        email,
        street,
        number,
        city,
        neighborhood,
        state,
      } = request.body;
      const member = (await MemberService.create(name, phone, email)).toJSON();
      const address = (await AddressService.create(
        member.id,
        street,
        number,
        neighborhood,
        city,
        state,
      )).toJSON();
      return response.status(201).json({ ...member, address });
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }
}
export default new MemberController();
