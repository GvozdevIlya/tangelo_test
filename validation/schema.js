const yup = require('yup');
module.exports = {
    authSchema: yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required()
    }),
    achievementSchema: yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        user_id: yup.number().required()
    })
};
