export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, '')

  if (/^0[789]0\d{8}$/.test(digits)) {
    // 携帯番号 (例: 090-1234-5678)
    return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
  }

  if (/^0\d{1,4}\d{2,4}\d{4}$/.test(digits)) {
    if (digits.startsWith('03') || digits.startsWith('06')) {
      // 東京/大阪固定電話番号 (2桁市外局番、例：03-1234-5678)
      return digits.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
    } else {
      // その他の固定電話番号 (3-5桁市外局番、例：0274-12-3456)
      return digits.replace(/(\d{3,5})(\d{2,4})(\d{4})/, '$1-$2-$3')
    }
  }

  return digits // フォーマットに合わない場合はそのまま返す
}
