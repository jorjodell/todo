import { useForm } from 'react-hook-form';

const AddModal = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="modal">
      <section className="modal-box">
        <h1 className="px-7 pt-6 mb-[30px] text-2xl font-bold capitalize">
          Create new tasks
        </h1>
        <div className="grid gap-11 px-7 py-6">
          <label className="block pb-1.5 border-b border-[#979797]">
            <p className="mb-2.5">Topic</p>
            <input 
              placeholder="Write Topic"
              className="w-full"
              {...register('title', { required: true, minLength: 4, maxLength: 13 })}
            />
            {errors.title && <p className="text-error">Это поле обязательно</p>}
          </label>
          <label className="block pb-1.5 border-b border-[#979797]">
            <p className="mb-2.5">Description</p>
            <input 
              placeholder="Write Description" 
              className="w-full" 
              {...register('description', { required: true, minLength: 10 })} 
            />
            {errors.description && <p className="text-error">Это поле обязательно</p>}
          </label>
        </div>
        <button className="modal-btn" onClick={handleSubmit(onSubmit)}>
          add
        </button>
      </section>
    </div>
  )
}

export default AddModal;
