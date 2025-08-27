import { Dialog } from "@headlessui/react";

interface Props {
    // setWaitlistOpen: (open: boolean) => void;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    formData: {
        phone: string;
        email: string;
        location: string;
        role: string;
        service: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => void; 
}
export default function Form({ formData, modalOpen, setModalOpen, handleChange, handleSubmit }: Props) {
    return (
        <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
            <Dialog.Title className="text-xl font-semibold text-blue-900 mb-4">
              Join Waitlist
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gold-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gold-400"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gold-400"
                required
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gold-400"
                required
              >
                <option value="">Who are you?</option>
                <option value="partner">Partner</option>
                <option value="host">Host</option>
              </select>

              {formData.role === "partner" && (
                <input
                  type="text"
                  name="service"
                  placeholder="Service you provide"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gold-400"
                  required
                />
              )}

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-white font-medium hover:shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    )
}