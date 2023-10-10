const Form = require("../model/formModel");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

// add form
exports.addForm = catchAsyncErrors(async (req, res, next) => {
    const data = req.body;

    if (
        !data.usage ||
        !data.appGoal ||
        !data.userExperiance ||
        !data.improvementSuggestion ||
        !data.birthDate
    ) {
        return next(
            new ErrorHandler("please provide values for all fields", 400)
        );
    }

    const form = await Form.create(data);

    res.status(200).json({
        success: true,
        form,
    });
});

// get all forms
exports.getAllForms = catchAsyncErrors(async (req, res, next) => {
    const forms = await Form.find();

    if (forms.lenth < 0) {
        return next(new ErrorHandler("no forms found", 400));
    }

    res.status(200).json({
        success: true,
        forms,
    });
});
