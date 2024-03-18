import useModal, { ModalComponent } from '@hooks/use-modal';

const TestComponent: ModalComponent = ({ closeModal }) => {
  return (
    <div>
      <h1>Test Component</h1>
      <button type='button' onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default TestComponent;

const { openModal } = useModal();

openModal(TestComponent, {}, { persist: true });
