import Swal from 'sweetalert2';

const notify = {};
notify.success = (message, options) => new Promise((resolve) => {
  const defaultOptions = {
    title:'',
    icon: 'success',
    html: message,
    cancelButtonText:'cancel',
    buttonsStyling: false,
    showConfirmButton: false,
    showCancelButton: true,
    customClass:{
      closeButton:'btn-sm',
      actions: 'actions-class',
      cancelButton: 'btn btn-primary'
    }
  };


  Swal.fire({ ...options, ...defaultOptions }).then((result) => {
    resolve(result);
  });
});

notify.confirm = (message, options) => new Promise((resolve) => {
  const defaultOptions = {
    title:'',
    html: message,
    icon: 'question',
    cancelButtonText:'cancel',
    confirmButtonText:'confirm',
    buttonsStyling: false,
    showConfirmButton: true,
    showCancelButton: true,
    allowOutsideClick: false,
    customClass:{
      closeButton:'btn-sm',
      actions: 'actions-class',
      confirmButton: 'btn btn-primary px-4 me-3',
      cancelButton: 'btn btn-secondary px-4',
      confirmButtonText:'btn btn-primary px-4'
    }
  };

  Swal.fire({ ...options, ...defaultOptions }).then((result) => {
    resolve(result);
  });
});

notify.error = (message, options = false) => new Promise((resolve) => {
  const defaultOptions = {
    title:'',
    icon: 'error',
    html: message,
    cancelButtonText: 'cancel',
    buttonsStyling: false,
    showConfirmButton: false,
    showCancelButton: true,
    allowOutsideClick: false,
    customClass:{
      closeButton:'btn-sm',
      actions: 'actions-class',
      cancelButton: 'btn btn-primary px-4',
    }
  };
  Swal.fire({ ...options, ...defaultOptions }).then((result) => {
    resolve(result);
  });
});

notify.warning = (message, options) => new Promise((resolve) => {
  const defaultOptions = {
    title:'',
    html: message,
    icon:'warning',
    cancelButtonText:'cancel',
    buttonsStyling: false,
    showConfirmButton: false,
    showCancelButton: true,
    customClass:{
      closeButton:'btn-sm',
      actions: 'actions-class',
      confirmButton: 'btn btn-default',
      cancelButton: 'btn btn-default',
      confirmButtonText:'btn btn-warning'
    }
  };

  Swal.fire({ ...options, ...defaultOptions }).then((result) => {
    resolve(result);
  });
});

notify.isVisible = () => {
  return Swal.isVisible();
};

notify.close = () => {
  return Swal.close();
};

export default notify;
