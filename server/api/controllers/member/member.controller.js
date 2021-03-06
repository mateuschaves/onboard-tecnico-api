import MemberService from '../../services/member.service';
import ValidationHelper from '../../helpers/validation.helper';

export class MemberController {
  async all(request, response) {
    const { page = 1, limit = 20 } = request.query;

    try {
      await ValidationHelper.hasErrors(request);
      const members = await MemberService.all(page, limit);
      const paginatedResponse = {
        rows: members,
        count: members.length,
        page: Number(page),
      };
      return response.status(200).json(paginatedResponse);
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
        status,
        memberTypeId,
      } = request.body;
      const member = (await MemberService.create(
        name,
        phone,
        email,
        status,
        memberTypeId,
      )).toJSON();
      return response.status(201).json(member);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }

  async update(request, response) {
    try {
      await ValidationHelper.hasErrors(request);
      const {
        name,
        phone,
        status,
        memberTypeId,
      } = request.body;
      const { id } = request.params;

      const [, [rowsAffected]] = await MemberService.update(id, name, phone, status, memberTypeId);
      return response.status(200).json(rowsAffected);
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }

  async destroy(request, response) {
    try {
      await ValidationHelper.hasErrors(request);
      const { id } = request.params;
      await MemberService.destroy(id);
      return response.status(204).json();
    } catch (error) {
      if (error.validation_failed) return response.status(400).json(error);
      return response.status(500).json(error);
    }
  }
}
export default new MemberController();
