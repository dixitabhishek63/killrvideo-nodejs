import { load } from '../common/load';

// Load the protobuf definition to get the service object
const file = 'ratings/ratings_service.proto';
const proto = load(file);
const { service } = proto.killrvideo.ratings.RatingsService;

/**
 * The ratings service implementation.
 */
const implementation = {
  rateVideo(call, cb) {
    cb(new Error('Not implemented'));
  },

  getRating(call, cb) {
    cb(new Error('Not implemented'));
  },

  getUserRating(call, cb) {
    cb(new Error('Not implemented'));
  }
}; 

/**
 * Ratings service, responsible for tracking user's rating of videos.
 */
export default {
  service,
  implementation 
};