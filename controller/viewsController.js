const Tour = require('../models/tourModel');
//const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getFrontPage = (req, res, next) => {
  res.status(200).render('frontPage', {
    title: 'Exciting Tours',
  });
};

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review, rating, user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 400));
  }

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      "default-src 'self' https://*.mapbox.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://api.mapbox.com 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render('tour', {
      title: tour.name,
      tour,
    });
});

exports.getloginForm = (req, res, next) => {
  res.status(200).render('login', {
    title: 'Log in to your account',
  });
};

exports.getsignupForm = (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Create New Account',
  });
};

exports.getreviewForm = (req, res, next) => {
  res.status(200).render('review', {
    title: 'Add review and rating to this tour.',
  });
};

exports.myaccount = (req, res, next) => {
  res.status(200).render('account', {
    title: 'My Account',
  });
};
