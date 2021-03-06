import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos';
import { v4 as uuid } from 'uuid'

const AddModal = ({ onClose }) => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTodo({ ...data, completed: false, id: uuid() }));
    onClose();
  }

  return (
    <div className="modal">
      <button className="modal-bg" onClick={onClose} />
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
              {...register('title', { required: true })}
            />
            {errors.title && <p className="text-error">Это поле обязательно</p>}
          </label>
          <label className="block pb-1.5 border-b border-[#979797]">
            <p className="mb-2.5">Description</p>
            <input 
              placeholder="Write Description" 
              className="w-full" 
              {...register('description', { required: true })} 
            />
            {errors.description && <p className="text-error">Это поле обязательно</p>}
          </label>
          <label className="block pb-1.5 border-b border-[#979797]">
            <input
              type="datetime-local"
              placeholder="Choose date" 
              className="w-full" 
              {...register('date', { required: true })} 
            />
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
