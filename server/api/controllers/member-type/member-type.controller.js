import MemberTypeService from '../../services/member-type.service';
import ValidationHelper from '../../helpers/validation.helper';

export class MemberTypeController {
  async all(request, response) {
    const { page = 1, limit = 20 } = request.query;
    try {
      await ValidationHelper.hasErrors(request);
      const memberTypes = await MemberTypeService.all(page, limit);
      const paginatedResponse = {
        rows: memberTypes,
        count: memberTypes.length,
        page: Number(page),
      };
      return response.status(200).json(paginatedResponse);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }

  async create(request, response) {
    const { description, status } = request.body;
    try {
      await ValidationHelper.hasErrors(request);
      const memberType = await MemberTypeService.create(description, status);
      return response.status(201).json(memberType);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }
}
export default new MemberTypeController();
