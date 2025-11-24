module. exports = ({ env }) => ({
    upload: {
        config: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('dugtjiitzE'), 
            api_key: env( '414693581941734'), 
            api_secret: env('kD4ohj53Z6K0AZYhhWaCTESX9i4'),
        },
        actionOptions: {
            upload: {}, 
            uploadStream: {}, 
            delete: {},
        },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});