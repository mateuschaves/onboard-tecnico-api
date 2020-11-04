import MemberTypeService from '../../services/member-type.service';
import ValidationHelper from '../../helpers/validation.helper';

export class MemberTypeController {
  async create(request, response) {
    const { description, status } = request.body;
    try {
      await ValidationHelper.hasErrors(request);
      const memberType = await MemberTypeService.create(description, status);
      return response.status(201).json(memberType);
    } catch (error) {
      console.log(error);
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }
}
export default new MemberTypeController();
